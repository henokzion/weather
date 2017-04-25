var weatherApp = angular.module("weatherApp",['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider, $locationProvider, $sceProvider){
    $locationProvider.hashPrefix('');
    $sceProvider.enabled(false);
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/forcast',{
            templateUrl: 'templates/forcast.html',
            controller: 'forcastController'
        })
        .when('/forcast/:days',{
            templateUrl: 'templates/forcast.html',
            controller: 'forcastController'
        })
});
weatherApp.service('city', function(){
    this.city = "New York, NY";
});

weatherApp.controller('homeController',function($scope, city){
    $scope.city  = city.city;
    $scope.$watch('city', function(){
        city.city = $scope.city;
    });
});

weatherApp.controller('forcastController', function($scope, city, $resource, $routeParams){
    $scope.city = city.city;

    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = $resource ("http://api.openweathermap.org/data/2.5/forecast/daily");

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city, cnt: $scope.days , appid :  "5a9945a7e950ffdd758cb240bc328b8e"
    });

    $scope.convertToCelius = function(temp){
        return Math.round(temp - 273);
    }

    $scope.convertToDate = function(dt){
        return new Date(dt* 1000);
    }
});