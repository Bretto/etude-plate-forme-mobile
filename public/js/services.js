'use strict';

var services = angular.module('App.services', []);

services.constant('ROUTES',{
   deployment: "Deployments",
   extra: "Extras",
   framework: "Framewroks",
   prototype: "Prototypes",
   requirement :"Requirements"
});


services.factory('DataModel', function ($http, $log, $rootScope, $routeParams, $location) {

    var dataModel = {};

    dataModel.sideNav = [];
    dataModel.currentPage = {};

    dataModel.isPriNavActive = function(value){
        return ( '/'+value === $location.path() )? 'active' : '';
    }

    return dataModel;
});
