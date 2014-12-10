"use strict";

mybookApp.controller('navController', function($scope, $location) {

    this.doFeed = function() {
        $location.path('/feed');
    };

    this.doProfile = function() {
        $location.path('/profile');
    };
});
