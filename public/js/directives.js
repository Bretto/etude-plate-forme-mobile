'use strict';

var directives = angular.module('App.directives', []);

directives.directive('page', function (DataModel, $log, $routeParams, $route) {

    function link(scope, elem, attr, ctrl) {

        var data = [];
        $('.page section').each(function (index, value) {
            var obj = $(value);
            var title = obj.find('h2').text();
            if(title){
                data.push({title: title, id: obj.attr('id')});
            }
        });

        //scope.$apply(function(){
        DataModel.sideNav = data;
        // });

    }

    return {
        replace: false,
        restrict: 'A',
        link: link
    }

});


