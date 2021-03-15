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

            if ($scope.lunchItems.length === 0) 
            {
                $scope.resultMsg = 'Please enter data first';
            } 
            else 
            {
                const itemsArray = $scope. lunchItems.split(',');
                $scope.len = itemsArray.length;

                if ($scope.len <= 3)
                {
                    $scope.resultMsg = 'Enjoy!';


                }
                else
                {
                    $scope.resultMsg = 'Too much!';
                }
            }
             
        };   
    }

})();