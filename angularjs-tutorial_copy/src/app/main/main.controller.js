(function() {
  'use strict';

  angular
    .module('angularTemplate')

    /**.service('PercentCal', function(){

    var self=this;

    self.cal_percent=function(a,b){
    
    return a/b*100;
    
    }**/
    
    .controller('MainController', MainController)

    .controller('Yankee_Controller', Yankee_Controller)

    .controller('Boston_Controller', Boston_Controller)

    .controller('Cardinals_Controller', Cardinals_Controller)

    .controller('Giants_Controller', Giants_Controller)

    .controller('Oakland_Controller', Oakland_Controller)

    .controller('Dodgers_Controller', Dodgers_Controller)

    .controller('Reds_Controller', Reds_Controller)

    .controller('Braves_Controller', Braves_Controller)

    .controller('Diamond_Controller', Diamond_Controller)

    .controller('Angels_Controller', Angels_Controller)

    .service('PercentCal', function(){

    var self=this;

    self.cal_percent=function(a,b){
    
    return a/b*100;
    
    }})

    

    
    

    function Yankee_Controller()
    {
      var vm=this;
      vm.name='Yankee';

    }


    

    function Boston_Controller()
    {

       var vm=this;
      vm.name='Boston';

    } 

    function Cardinals_Controller()
    {
      var vm=this;
      vm.name='St Louis';

    }

    function Giants_Controller()
    {

      var vm=this;
      vm.name='San Francisco';

    }

    function Oakland_Controller()
    {

      var vm=this;
      vm.name='Oakland';


    }

    function Dodgers_Controller()
    {

      var vm=this;
      vm.name='Dodgers';

    }

    function Reds_Controller()
    {
      var vm=this;
      vm.name='Reds';

    }

    function Braves_Controller()
    {

      var vm=this;
      vm.name='Braves';

    } 

    function Diamond_Controller()
    {
      var vm=this;
      vm.name='Diamond';

    }

    function Angels_Controller()
    {
      var vm=this;
      vm.name='Angels';

    }



  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452128157995;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    vm.firstName="";
  vm.lastName="";
  vm.email="";

  vm.team_selected="";

  vm.teams_array=['new_york_yankees','boston_redsox','st_louis_cardinals','san_francisco(new york)_giants','oakland_(philadelphia)_athletics',
'pittsburg_pirates','los angelas(brooklyn)_dodgers','cincinnati_reds','detroit_tigers','baltimore_orioles','chicago_white_sox','chicago_cubs',
'cleveland_indians','florida_marlins','minnesota_twins','new_york_mets','philadelphia_phillies','toronto_blue_jays','kansas_city_royals',
'arizona_diamondbacks','atlanta_(boston/milwalkee)_braves','los_angeles_(brooklyn)_dodgers','washington_senators'];

  

  

  vm.reset=function(){

    vm.firstName="";
    vm.lastName="";
    vm.email="";

    vm.information={ firstname:vm.firstName,lastname:vm.lastName,email:vm.email};

    vm.form_reset=angular.copy(vm.information);
  }


  vm.submit=function(){

    vm.information={ firstname:vm.firstName,lastname:vm.lastName,email:vm.email,team_selected: vm.team_selected};

    vm.form_submit=angular.copy(vm.information);

    alert("Your information has been submitted");
    


  }


  }
})();
