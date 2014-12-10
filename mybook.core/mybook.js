"use strict";

var mybookApp = angular.module('mybookApp', ['ngRoute']);
mybookApp.config(function($routeProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
    .when('/feed',
            {
                templateUrl: './views/feed.html',
                controller: 'feedController'
            }
    ).when('/profile',
            {
               templateUrl: './views/profile.html',
               controller: 'profileController'
            }
    ).otherwise({
        redirectTo: '/index.html'
    });
});
