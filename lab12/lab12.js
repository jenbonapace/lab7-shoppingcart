var list = angular.module('List', []);


list.controller('myController', function($scope) {
    $scope.items = ['Buy milk', 'Finish lab', 'Clean car', 'Water plants', 'Read book'];
    console.log($scope.items);


    $scope.addItem = function() {
        $scope.items.push($scope.stuff);
        $scope.stuff = '';
    };
});
