/* global tracking */

'use strict';

/**
 * @ngdoc function
 * @name badsantaApp.controller:CaptureCtrl
 * @description
 * # CaptureCtrl
 * Controller of the badsantaApp
 */
angular.module('badsantaApp')
  .controller('CaptureCtrl', function ($scope, $firebase, FBURL) {
    var width = $('body').width();
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    $('#video').css('margin-left', width/2 - $('#video').width()/2);
    $('#canvas').css('margin-left', width/2 - $('#canvas').width()/2);
    $('.sprite_container').css('margin-left', width/2 - $('.sprite_container').width()/2);
    $('#capture-btn').css('margin-left', width/2 - $('#capture-btn').width()/2);
    var capture = document.getElementById('capture-btn');
    var context = canvas.getContext('2d');
    var rect; // reference to the tracking event

    var ref = new Firebase(FBURL);
    $scope.images = $firebase(ref).$asArray();

    // image we inject
    var imageObj = new Image();
    imageObj.src = '/images/sprites/santa_hat_2.png';

    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);
    tracking.track('#video', tracker, { camera: true });

    tracker.on('track', trackHandle);

    capture.addEventListener('click', buttonClickHandler);

    function draw(v,c,w,h) {
      if (v.paused || v.ended) {
        return false;
      }
      c.drawImage(v,0,0,w,h);
      //setTimeout(draw, 20, v,c,w,h);
    }

    $('.sprite_container').on('click', 'img', function (event) {
      $('.sprite_container img').each( function() {
        $(this).removeClass();
      });
      $(this).toggleClass('active');
      imageObj.src = $(this).attr('src');
    });


    function trackHandle(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      event.data.forEach(function(r) {
        rect = r;
        /*context.strokeStyle = '#a64ceb';
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        context.font = '11px Helvetica';
        context.fillStyle = "#fff";
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);*/
        context.drawImage(imageObj, rect.x, rect.y - rect.height + 20, rect.width, rect.height);
      });
    }

    function buttonClickHandler() {
      draw(video, context, canvas.width, canvas.height);
      context.drawImage(imageObj, rect.x, rect.y - rect.height + 20, rect.width, rect.height);
      tracker.removeListener('track', trackHandle);
      $scope.images.$add(canvas.toDataURL());

    }

    $scope.$on('$destroy', function () {
      tracker.removeListener('track', trackHandle);
      capture.removeEventListener('click', buttonClickHandler);
    });
  });
