angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.increBleListaDeBoliches', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/increBleListaDeBoliches.html',
        controller: 'increBleListaDeBolichesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('conectate', {
    url: '/page5',
    templateUrl: 'templates/conectate.html',
    controller: 'conectateCtrl'
  })

  .state('bolichNPage', {
    url: '/page6',
    templateUrl: 'templates/bolichNPage.html',
    controller: 'bolichNPageCtrl'
  })

  .state('faltaLugar', {
    url: '/page7',
    templateUrl: 'templates/faltaLugar.html',
    controller: 'faltaLugarCtrl'
  })

  .state('tabsController.mapa', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});