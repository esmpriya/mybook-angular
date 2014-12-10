"use strict";

mybookApp.controller('profileController', function($scope) {

    $scope.detail = {};
    $scope.doDisplayImage = function(fileInput) {
        var reader = new FileReader();
        reader.onloadend = function() {
            var output = document.getElementById('profile-img');
            output.src = reader.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    };

    $scope.doSaveDetail = function() {

    };
});
