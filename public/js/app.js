'use strict';


// Declare app level module which depends on filters, and services
angular.module('App', ['App.controllers', 'App.filters', 'App.services', 'App.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/requirement', {templateUrl:'partials/requirement.html'}).
            when('/framework', {templateUrl:'partials/framework.html'}).
            when('/extra', {templateUrl:'partials/extra.html'}).
            when('/reflection', {templateUrl:'partials/reflection.html'}).
            when('/deployment', {templateUrl:'partials/deployment.html', controller:'PageCtrl'}).
            when('/prototype', {templateUrl:'partials/prototype.html'}).
            when('/admin', {templateUrl:'partials/admin.html'}).
            when('/webservice', {templateUrl:'partials/webservice.html'}).
            otherwise({redirectTo:'/requirement'});
        $locationProvider.html5Mode(false);
    }]);


