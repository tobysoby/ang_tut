describe('RunListCtrl', function(){

  beforeEach(module('rApp'));

  it('should create "runs" model with 3 runs', inject(function($controller) {
    var scope = {},
        ctrl = $controller('RunListCtrl', {$scope:scope});

    expect(scope.runs.length).toBe(3);
  }));

});