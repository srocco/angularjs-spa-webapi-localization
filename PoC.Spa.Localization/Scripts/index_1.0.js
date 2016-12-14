var myApp = angular.module('myApp', ['pascalprecht.translate']);

myApp.config(['$translateProvider', '$translatePartialLoaderProvider',
function ($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useUrlLoader('/Resources/Json/es/fields.json');
    $translateProvider.preferredLanguage('es');
}]);

myApp.controller('HomeController', ['$scope', '$translatePartialLoader', '$translate',
function ($scope, $translatePartialLoader, $translate) {
   
}]);
