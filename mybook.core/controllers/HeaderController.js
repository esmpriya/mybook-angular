"use strict";

mybookApp.controller('headerController', function($rootScope) {

    var init = function() {
        $rootScope.session = {
            isAuthenticated: false,
            user: { username: '', password: ''}
        };
    };

    init();

    this.disabledSignIn = function() {

        if ($rootScope.session.user.username.length < 4 || $rootScope.session.user.username.length > 8) {
            //TODO: show error msg or highlight the field as invalid
            // alert("Error: Username must contain atleast 4 characters and should not exceeds 8 characters!");
            return true;
        }

        if ($rootScope.session.user.password.length < 6) {
            //TODO: show error msg or highlight the field as invalid
            // alert("Error: Password must contain at least six characters!");
            return true;
        }

        return false;
    };

    this.doSignIn = function() {

        if ($rootScope.session.user.username !== 'priya' || $rootScope.session.user.password !== 'selvam') {
            return false;
        }

        $rootScope.session.isAuthenticated = true;
        return true;
    };


    this.doSignOut = function() {

        //TODO: should refresh the content
        this.init();
    };
});
