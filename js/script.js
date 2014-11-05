	var hopscotchApp = angular.module('hopscotchApp', ['ngRoute', 'ngMap', 'angularSimpleSlider', 'ngAutocomplete']);

	hopscotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the search page
			.when('/search', {
				templateUrl : 'pages/search.html',
				controller : 'searchController'
			})

			// route for mapyourtap page
			.when('/map', {
				templateUrl : 'pages/map.html',
				controller : 'mapController'
			})
	});

	hopscotchApp.controller('mainController', function($scope) {
		$scope.image = 'https://lh6.googleusercontent.com/-JBeBwwUf9y4/VE7QgzF1zaI/AAAAAAAAC_U/5ONGOPTZ3YI/w1774-h1118-no/beers.gif';
		$scope.message = 'Tap kegs from east to west!'
	});

	hopscotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Brews. Bagels. Bratwurst.'
	});

	hopscotchApp.controller('searchController', function($scope,$http) {
		$http.get('breweries/brews.json').success(function(data) {
			$scope.brews = data;
			});
		$scope.orderProp = 'state';
		});

	hopscotchApp.controller('mapController', ['$scope', '$timeout', function($scope, $timeout) {
	    var marker, map;
	    $scope.$on('mapInitialized', function(event, map) {
	      marker = map.markers[0];
	    });
	    $scope.result = '';
    	//$scope.options1 = null;
    	$scope.details = '';
	  }]);