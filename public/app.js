angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('family', {
                url: '/family',
                templateUrl: './views/family.html',
                controller: 'mainController'
            });
        $urlRouterProvider
            .otherwise('/');
    });

