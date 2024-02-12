// angular.module('geolocation')
//   .controller('PopupController', function($scope, $http) {
//     $scope.showPopup = false;
//     $scope.geolocation = '';

//     $scope.openPopup = function() {
//         var request = {
//           country: $scope.country,
//           city: $scope.city,
//           street: $scope.street,
//           postalCode: $scope.postalCode,
//           email: $scope.email
//         };
      
//         $http.post('/get', request)
//           .then(function(response) {
//             $scope.geolocation = response.data;
//             $scope.showPopup = true;
//           })
//           .catch(function(error) {
//             console.error('Error:', error);
//           });
//       };

//     $scope.closePopup = function() {
//       $scope.showPopup = false;
//     };
//   });