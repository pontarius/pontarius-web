(function () {
    'use strict';

    var app = angular.module('pontarius-web', ['ui.bootstrap', 'ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('contribute', {
            templateUrl: 'templates/contribute.html',
            url: '/contribute'
        }).state('home', {
            templateUrl: 'templates/home.html',
            url: '/home'
        }).state('ourWork', {
            templateUrl: 'templates/our-work.html',
            url: '/our-work'
        }).state('vision', {
            templateUrl: 'templates/vision.html',
            url: '/vision'
        });
    }]);

    app.run(['$rootScope', '$window', function ($rootScope, $window) {
        $rootScope.$on('$viewContentLoaded', function () {
            $window.scrollTo(0, 0);
        });
    }]);
}());
