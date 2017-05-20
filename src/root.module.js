angular.module("com.netease.classroom",[
	"com.netease.classroom.controllers",
	"com.netease.classroom.directives",
	"com.netease.classroom.filters",
	"com.netease.classroom.routers",
	"com.netease.classroom.servers",
	"ngRoute"
]).config(function($routeProvider){
	$routeProvider
	.when("/main",{
		templateUrl:"views/main.html",
		controller:"mainController"
	})
	
	.otherwise("main")
})
