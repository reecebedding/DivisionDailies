angular.module('AdminIndex.controllers', []).
    controller('AdminController', function($scope, $http){
        $scope.newVendorSet = {
            'name':'',
            'items':{
                'gear':[{}],
                'weapons':[{}],
                'mods':[{}],
                'appearance':[{}]
            }
        };
    
        $scope.addGearItem = function(){
            $scope.newVendorSet.items.gear.push({});
        };
    
        $scope.addModItem = function(){
            $scope.newVendorSet.items.mods.push({});
        };
    
        $scope.addWeaponItem = function(){
            $scope.newVendorSet.items.weapons.push({});
        };
        $scope.addAppearanceItem = function(){
            $scope.newVendorSet.items.appearance.push({});
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