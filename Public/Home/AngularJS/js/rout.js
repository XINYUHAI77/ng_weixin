/*应用程序“果酒”的路由模块*/
angular.module('myApp',['ngRoute','ngAnimate','app-controller'])
    .config(function($routeProvider){
        $routeProvider
            .when('/start',{
                templateUrl: '/Application/Home/View/Index/start.html',
                controller: 'startController'
            })
            .when('/detail/:id',{
                templateUrl: '/Application/Home/View/Index/detail.html',
                controller: 'detailController'
            })
            .when('/pay/:id/:num',{
                templateUrl: '/Application/Home/View/Index/pay.html',
                controller: 'payController'
            })
            .when('/orderlst',{
                templateUrl: '/Application/Home/View/Index/orderlst.html',
                controller: 'orderlstController'
            })
            .when('/hot',{
                templateUrl: '/Application/Home/View/Index/hot.html',
                controller: 'hotController'
            })
            .otherwise({
                redirectTo: '/start'
            })
    })
