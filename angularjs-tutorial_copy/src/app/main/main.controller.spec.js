(function() {
  'use strict';

  describe('Test PercentCal Service', function(){

    var toTest;

    beforeEach(module('angularTemplate'));

    beforeEach(inject(function(_PercentCal_){

      toTest=_PercentCal_;

    
    }))

    it('should calculate the percentage correctly', function(){

      var a=4;
      var b=10;

      var result=toTest.cal_percent(a,b);

      expect(result).toBe(40);

    });

  });

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('angularTemplate'));
    beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_, _toastr_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('MainController');
      $timeout = _$timeout_;
      toastr = _toastr_;
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define animate class after delaying timeout ', function() {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    });

    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(vm.classAnimation).toEqual('');
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });
  });
})();
