var car = angular.module('carArena', []);

car.controller('carController', function ($scope, $http) {
  $scope.value = "Audi";
  $scope.models = ["Intense Speed", "High horsepower", "Amazing Fuel consumption", "Engine Capacity is beyond belief", "Available in any colour"];
  $scope.title = "Audi";
  $scope.image = "img/andela_icon.png";

  // $http.get('data/cars.json').success(function(data) {
  //   $scope.cars = data;
  // });

  // var view = document.getElementsByClassName('imageList');
  // console.log(view.length);

  $http.get('https://api.github.com/users/andela-lmeke').success(function(data) {
    $scope.person = data;
  });

  $http.get('https://api.github.com/users/andela-sadefila').success(function(data) {
    $scope.person2 = data;
  });

});

