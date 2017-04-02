angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('family', {
                url: '/family',
                templateUrl: './views/family.html',
                controller: 'mainController'
            })
        .state('home',{
            url:'/home',
            templateUrl: './views/home.html',
            controller: 'mainController'
        })
            .state('hobbies',{
                url:'/hobbies/:id',
                templateUrl: './views/hobbies.html',
                controller: 'mainController'
            })
        $urlRouterProvider
            .otherwise('/');
    });

