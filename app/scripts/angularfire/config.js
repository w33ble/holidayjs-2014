angular.module('firebase.config', [])
  .constant('FBURL', 'https://holiday2014.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');