app.service('geoService', function($http) {
    this.getGeoLocation = function(data) {
        return $http.post('/geolocation/get', data);
    };
    this.sendEmail = function(email) {
        return $http.post('/geolocation/send-email', email);
    };
});