angular.module('Index.controllers', []).
    controller('IndexController', function($scope, $http){
        $scope.vendorDetails = [{}];
        $http.get('api/vendor').
            success(function(data, status, headers, config){
                $scope.vendorDetails = data;
            }).
            error(function(data, status, headers, config){
                
            })
    });