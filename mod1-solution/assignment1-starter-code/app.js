(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.resultMsg = '';
        $scope.lunchItems = '';
        $scope.len = 0;
        $scope.checkInput = function() {
            //if the user doesn't enter anything, return prompt to enter data
            if ($scope.lunchItems.length === 0) 
            {
                $scope.resultMsg = 'Please enter data';
            } 
            else 
            {
                const itemsArray = $scope. lunchItems.split(',');
                $scope.len = itemsArray.length;
            }
            
            
        };   
    }

})();