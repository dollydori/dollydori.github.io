var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
   $scope.toggle = function(_key) {
      $scope.toggleflags[_key] = !$scope.toggleflags[_key];
   };

   $scope.turnOffLight = function() {
      $scope.style.bgclass = 'light-off';
   }

   $scope.turnOnLight = function() {
      $scope.style.bgclass = 'light-on';
   }

   /* private functions */
   function init() {
      $scope.toggleflags = {
         more_exp: false,
         more_ed: false
      };

      $scope.style = {
         bgclass: ''
      };
   }

   /* init */
   init();
});
