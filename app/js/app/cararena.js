var car = angular.module('carArena', []);

car.controller('carController', function ($scope, $http) {
  $scope.value = "Audi";
  $scope.models = ["Intense Speed", "High horsepower", "Amazing Fuel consumption", "Engine Capacity is beyond belief", "Available in any colour"];
  $scope.title = "Audi";
  $scope.image = "img/andela_icon.png";

  $http.get('data/cars.json').success(function(data) {
    $scope.cars = data;
  });

  var view = document.getElementsByClassName('imageList');
  console.log(view.length);

});

