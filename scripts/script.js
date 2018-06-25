// create the module and name it scotchApp
var doersApp = angular.module("doersApp", [
  "ngRoute",
  "ngAnimate",
  "ui.router"
]);

// configure our routes
doersApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "mainController"
    })
    .when("/categories", {
      templateUrl: "pages/categories.html",
      controller: "categoryController"
    })
    // route for the home page
    .when("/seller", {
      templateUrl: "pages/seller.html",
      controller: "sellerController"
    })
    .when("/buyer", {
      templateUrl: "pages/buyer.html",
      controller: "buyerController"
    });
});
// create the controller and inject Angular's $scope
doersApp.controller("mainController", function($scope, $state, MyService) {
  $scope.test = "mainController";
});

doersApp.controller("categoryController", function(
  $scope,
  $rootScope,
  $stateParams,
  $state
) {
  $scope.message = "categoryController.";
  $scope.categories = [
    {
      name: "Dress Making"
    },
    {
      name: "Mason"
    },
    {
      name: "ABC Car Sellers"
    },
    {
      name: "Ceeling Builders"
    },
    {
      name: "Carpenters"
    },
    {
      name: "Photographer"
    },
    {
      name: "Vehical Sale"
    }
  ];
});
doersApp.controller("sellerController", function(
  $scope,
  $rootScope,
  $stateParams,
  $state
) {
  $scope.message = "sellerController.";
});

doersApp.controller("buyerController", function(
  $scope,
  $rootScope,
  $stateParams,
  $state
) {
  $scope.message = "buyerController.";
});
doersApp.service("MyService", function($rootScope, $http, $q) {
  this.getAllSystems = function() {
    $rootScope.loading = true;
    var deferred = $q.defer();
    $http
      .get("/getAllMovies")
      .success(function(response, status, headers, config) {
        $rootScope.loading = false;
        deferred.resolve(response);
      });
    return deferred.promise;
  };
});
