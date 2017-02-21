app.directive('userInfoCard', function() {
    return {
        templateUrl: 'app/templates/directives/userInfoCard.html',
        restrict: "AEC",
        scope: {
        	user:'='
        },
        controller: function($scope) {
            $scope.knightMe = function(user) {
                user.rank = "knight";
                console.log('user.rank', !user.rank);
                console.log('user.rank', !!user.rank);
            }
            console.log('$scope', $scope);
        }
    }
})
