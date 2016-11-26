//creating angualr module
var myApp = angular.module('queryHubApp' , ['ngRoute' ,'ngFileUpload'] , function config($httpProvider){

	//pushing auth token interceptor

	$httpProvider.interceptors.push('authInterceptor');
});