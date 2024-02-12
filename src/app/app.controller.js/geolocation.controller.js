app.controller('geoController', function($scope, geoService) {
    $scope.getGeoLocation = function() {
        var data = {
            country: $scope.country,
            city: $scope.city,
            street: $scope.street,
            postalCode: $scope.postalCode
        };
        geoService.getGeoLocation(data).then(function(response) {
            $scope.geoResponse = response.data;
        });
    };

    $scope.sendEmail = function() {
        var email = { email: $scope.email };
        geoService.sendEmail(email).then(function(response) {
            $scope.emailResponse = response.data;
        });
    };
});
