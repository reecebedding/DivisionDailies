angular.module('AdminIndex.controllers', []).
    controller('AdminController', function($scope, $http){
        $scope.newVendorSet = {
            'name':'',
            'items':{
                'gear':[{}]
            }
        };
    
        $scope.addGearItem = function(){
            $scope.newVendorSet.items.gear.push({});
        };

        $scope.saveData = function(){
            alert(angular.toJson($scope.newVendorSet));
            $http({
                method: 'POST',
                url: '/admin/api/vendor',
                data: angular.toJson($scope.newVendorSet)
            }).then(function successCallback(response){
                alert(JSON.stringify(response));
            }, function errorCallback(response){
                alert(JSON.stringify(response));
            })
        };
});