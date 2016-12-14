var myApp = angular.module('myApp', ['pascalprecht.translate']);

myApp.config(['$translateProvider', '$translatePartialLoaderProvider',
    function ($translateProvider, $translatePartialLoaderProvider) {

        $translatePartialLoaderProvider.addPart('fields');
        $translatePartialLoaderProvider.addPart('messages');

        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/Resources/Json/{lang}/{part}.json'
        });
        $translateProvider.preferredLanguage('es');

    }]);


myApp.controller('HomeController', ['$scope', '$translatePartialLoader', '$translate',
function ($scope, $translatePartialLoader, $translate) {

    $scope.changeToES = function () {
        $translate.use("es");
    };

    $scope.changeToEN = function () {
        $translate.use("en");
    };
}]);