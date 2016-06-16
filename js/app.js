//var app = angular.module("demo", ["ngRoute"]);

//app.config(function ($routeProvider) {
//    $routeProvider.
//      when('/', {
//          templateUrl: 'country-list.html',
//          controller: 'CountryListCtrl'
//      }).
//      when('/country/:countryName', {
//          templateUrl: 'country-detail.html',
//          controller: 'CountryDetailCtrl'
//      }).
//      otherwise({
//          redirectTo: '/'
//      });
//});

//app.controller("CountryListCtrl", function ($scope, $http) {
//    $http.get("country.json").success(function (res) {
//        $scope.ulkeler = res.ulkeler;
//    });
//});

//app.controller("CountryDetailCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
//    $scope.countryName = $routeParams.countryName
//}]);