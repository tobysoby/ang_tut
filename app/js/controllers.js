var rApp = angular.module('rApp', [])

rApp.controller('RunListCtrl', function ($scope) {
  $scope.runs = [
    {'date': '15.08.2015',
     'distance': '15km'},
    {'date': '21.12.2014',
     'distance': '8km'},
    {'date': '01.03.2015',
     'distance': '6km'}
  ];
});