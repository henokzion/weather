var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/",{
            templateUrl : "pages/main.html",
            controller : 'mainController'
        })
        .when("/second",{
            templateUrl : "pages/second.html",
            controller : 'secondController'
        })
});
app.directive("chart", function(){
    return {
        templateUrl: 'templates/chart.html',
        scope: {
            personName : '@'
        }
    }
});

app.controller("mainController", function($scope){
    $scope.name = "Main";
    $scope.person = {
        name: "henok"
    }
});

app.controller("secondController", function($scope){
    $scope.name = "second";
});

/*app.controller("con",[
    '$scope', '$timeout','$filter',
    function($scope, $timeout, $filter){
        $scope.name = "henok";
        $timeout(function(){
            $scope.name =  "samrawit";
        },3000);

        $scope.handle = "";
        $scope.handleS = function (){
            return $filter('lowercase')($scope.handle);
        }
        $scope.characters = 5;

    }
]);*/
