'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'angular-jwt',
  'myApp.security',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.login',
  'myApp.AddAirline',
  'myApp.filters',
  'myApp.directives',
  'myApp.factories',
  'myApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
//.
        .config(function ($httpProvider) {
   $httpProvider.interceptors.push('AuthInterceptor');
});


