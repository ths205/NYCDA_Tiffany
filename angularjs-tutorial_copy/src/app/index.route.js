(function() {
  'use strict';

  angular
    .module('angularTemplate')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('yankee', {

      url:'/yankees',
      templateUrl:'app/world_series_teams/yankees_template.html',
      controller:'Yankee_Controller',
      controllerAs:'ctrl'

    
    })

      .state('boston', {

      url:'/red_sox',
      templateUrl:'app/world_series_teams/boston_template.html',
      controller:'Boston_Controller',
      controllerAs:'ctrl'

    })

      .state('st_louis', {

      url:'/cardinals',
      templateUrl:'app/world_series_teams/st_louis_cardinals.html',
      controller:'Cardinals_Controller',
      controllerAs:'ctrl'

    })

      .state('st_francisco_giants', {

      url:'/giants',
      templateUrl:'app/world_series_teams/san_francisco_giants.html',
      controller:'Giants_Controller',
      controllerAs:'ctrl'

    })

      .state('oakland_athletics', {
      url:'/athletics',
      templateUrl:'app/world_series_teams/oakland_athletics.html',
      controller:'Oakland_Controller',
      controllerAs:'ctrl'



    })

      .state('los_angelas_dodgers', {
      url:'/dodgers',
      templateUrl:'app/world_series_teams/los_angelas_dodgers.html',
      controller:'Dodgers_Controller',
      controllerAs:'ctrl'



    })

      .state('cincinatti_reds', {
      url:'/reds',
      templateUrl:'app/world_series_teams/cincinatti_reds.html',
      controller:'Reds_Controller',
      controllerAs:'ctrl'



    })

       .state('atlanta_braves', {
      url:'/braves',
      templateUrl:'app/world_series_teams/atlanta_braves.html',
      controller:'Braves_Controller',
      controllerAs:'ctrl'



    })

       .state('arizona_diamond_backs', {
      url:'/diamond',
      templateUrl:'app/world_series_teams/arizona_diamond_backs.html',
      controller:'Diamond_Controller',
      controllerAs:'ctrl'



    })

       .state('anaheim_angels', {
      url:'/angels',
      templateUrl:'app/world_series_teams/anaheim_angels.html',
      controller:'Angels_Controller',
      controllerAs:'ctrl'



    })
       .state('link_of_teams', {
        url:'/link',
        templateUrl:'app/links_to_teams.html'


       })


    $urlRouterProvider.otherwise('/');
  }

})();
