// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })

  .state('list', {
    url: '/list',
    templateUrl: 'templates/list.html',
    controller: 'ListCtrl'
  })

  .state('display', {
    url: '/display',
    templateUrl: 'templates/display.html',
    controller: 'DisplayCtrl'
  })

  .state('flex-direction', {
    url: '/flex-direction',
    templateUrl: 'templates/flex-direction.html',
    controller: 'Flex-directionCtrl'
  })

  .state('justify-content', {
    url: '/justify-content',
    templateUrl: 'templates/justify-content.html',
    controller: 'Justify-contentCtrl'
  })

  .state('align-items', {
    url: '/align-items',
    templateUrl: 'templates/align-items.html',
    controller: 'Align-itemsCtrl'
  })

  .state('flex-wrap', {
    url: '/flex-wrap',
    templateUrl: 'templates/flex-wrap.html',
    controller: 'Flex-wrapCtrl'
  })

  .state('align-content', {
    url: '/align-content',
    templateUrl: 'templates/align-content.html',
    controller: 'Align-contentCtrl'
  })

  .state('order', {
    url: '/order',
    templateUrl: 'templates/order.html',
    controller: 'OrderCtrl'
  })

  .state('align-self', {
    url: '/align-self',
    templateUrl: 'templates/align-self.html',
    controller: 'Align-selfCtrl'
  })

  .state('flex', {
    url: '/flex',
    templateUrl: 'templates/flex.html',
    controller: 'FlexCtrl'
  })

  .state('flex-flow', {
    url: '/flex-flow',
    templateUrl: 'templates/flex-flow.html',
    controller: 'Flex-flowCtrl'
  })

  .state('calc', {
    url: '/calc',
    templateUrl: 'templates/calc.html',
    controller: 'CalcCtrl'
  })

  .state('express', {
    url: '/express',
    templateUrl: 'templates/express.html',
    controller: 'ExpressCtrl'
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
