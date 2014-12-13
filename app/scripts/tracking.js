window.onload = function() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track('#video', tracker, { camera: true });
  var imageObj = new Image();
  var rect;
  imageObj.src = "/images/sprites/santahat.png";
  tracker.on('track', trackHandle);

  var capture = document.getElementById('capture-btn');
  capture.addEventListener('click', function () {
    draw(video, context, canvas.width, canvas.height);
    context.drawImage(imageObj, rect.x, rect.y - rect.height + 20, rect.width, rect.height);
    tracker.removeListener('track', trackHandle);
  });

  function draw(v,c,w,h) {
    if(v.paused || v.ended ) return false;
    c.drawImage(v,0,0,w,h);
    //setTimeout(draw, 20, v,c,w,h);
  };

  function trackHandle(event) {
    //context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function(r) {
      rect = r;
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      context.drawImage(imageObj, rect.x, rect.y - rect.height + 20, rect.width, rect.height);  
    });
  }
};