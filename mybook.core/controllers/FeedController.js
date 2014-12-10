"use strict";

Date.prototype.toString = function() {
    return this.getDate() + "-" + (this.getMonth() + 1) + "-" + this.getFullYear() + " " +
    (this.getHours() < 10 ? "0" + this.getHours() : this.getHours())       + ":" +
    (this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes()) + ":" +
    (this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds()) ;
};

var Feed = function() {
    this.id = 0;
    this.type = "text";
    this.postedOn = new Date();
    this.postedBy = "priya";
};

Feed.prototype = {
    getId: function() { return this.id; },
    getType: function() { return this.type; },
    getPostedOn: function() { return this.postedOn.toString(); },
    isText: function() { return this.type === 'text'; },
    isUrl: function() { return this.type !== 'text'; }
};

var URLFeed = function (URL) {
    this.URL = URL;
    this.type = "URL";
    this.id = 0;
    this.postedOn = new Date();
    this.postedBy = "priya";
};

URLFeed.prototype = new Feed();
URLFeed.prototype.getFeed = function() {
    return this.URL;
};

var TextFeed = function (text) {
    this.text = text;
    this.type = "text";
    this.id = 0;
    this.postedOn = new Date();
    this.postedBy = "priya";
};

TextFeed.prototype = new Feed();
TextFeed.prototype.getFeed = function() {
    return this.text;
};

mybookApp.service('feedService', function() {

    this.isUrl = function(text) {
        var urlRegExp = /(ftp|http|https|file):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return urlRegExp.test(text);
    };

    this.getFeed = function(feedText) {
        return this.isUrl(feedText) ? new URLFeed(feedText) : new TextFeed(feedText);
    };
});

mybookApp.controller('feedController', function($scope, feedService) {

    $scope.feeds = [];
    $scope.id = 0;

    $scope.feedText = '';
    $scope.disabledPost = function() {
        return $scope.feedText.length == 0;
    };

    $scope.doPost = function() {
        var feed = feedService.getFeed($scope.feedText);
        this.id++;
        feed.id = this.id;
        this.feeds.push(feed);
        console.log(feed);
        $scope.feedText = '';
    };

    $scope.doDeleteFeed = function(id) {
        for (var i = 0; i < this.feeds.length; i++) {
            if (this.feeds[i].id === id) {
                return this.feeds.splice(i, 1);
            }
        }
    };

    this.getTotalFeeds = function() {
        return this.feeds;
    },

    this.getFeedCount = function() {
        return this.feeds.length;
    },

    this.getNexFeedId = function() {
        return this.feeds.length + 1;
    }
});
