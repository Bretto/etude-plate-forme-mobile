'use strict';
/* App Controllers */

var controllers = angular.module('App.controllers', []);


controllers.controller('AppCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('AppCtrl');

});

controllers.controller('PrimaryNavCtrl', function ($scope, $rootScope, $routeParams, $timeout, $log, $http, DataModel) {
    $log.info('PriNavCtrl');

//    $rootScope.$on('$routeChangeStart',function(scope,next,current){
//        $log.info('$routeChangeStart');
//
//    })

    $scope.dataModel = DataModel;

});

controllers.controller('SecondaryNavCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $anchorScroll, $location) {
    $log.info('SecondaryNavCtrl');

    $scope.dataModel = DataModel;

    $scope.onClick = function (section) {
        $location.hash(section.id);
        $anchorScroll();
    }

});


controllers.controller('PageCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $anchorScroll, $location, $routeParams, $route, ROUTES) {
    $log.info('PageCtrl');

   // $log.info($routeParams, $route, $location, ROUTES);
});












