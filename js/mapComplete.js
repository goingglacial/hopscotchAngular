/*
 *
 * <input type="text" ng-autocomplete="result" details="details" options="options"/>
 *
 *   + `ng-autocomplete="result"`: specifies the directive, $scope.result will hold the textbox autocomplete result
 *
 *   + `details="details"`: $scope.details will hold the autocomplete's more detailed result; latlng. address components, etc.
 *
 *   + `options="options"`: options provided by the user that filter the autocomplete results
 *
 *      + options = {
 *           types: type,        string, values can be 'geocode', 'establishment', '(regions)', or '(cities)'
 *           bounds: bounds,     google maps LatLngBounds Object
 *           country: country    string, ISO 3166-1 Alpha-2 compatible country code. examples; 'ca', 'us', 'gb'
 *         }
 *
 *
 */

angular.module( 'ngAutocomplete', [])
  .directive('ngAutocomplete', function($parse) {
    return {

      scope: {
        details: '=',
        ngAutocomplete: '=',
        options: '=',
        map: '='
      },

      link: function(scope, element, attrs, model) {

        //options for autocomplete
        var opts;

        //convert options provided to opts
        var initOpts = function() {
          opts = {};
          if (scope.options) {
            if (scope.options.types) {
              opts.types = [];
              opts.types.push(scope.options.types);
            }
            if (scope.options.bounds) {
              opts.bounds = scope.options.bounds;
              bounds = opts.bounds;
            }
            if (scope.options.country) {
              opts.componentRestrictions = {
                country: scope.options.country
              };
            }
          }
        }
        initOpts();

        //create new autocomplete
        //reinitializes on every change of the options provided
        var newAutocomplete = function() {
          scope.gPlace = new google.maps.places.Autocomplete(element[0], opts);
          google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
            scope.$apply(function() {
//              if (scope.details) {
                scope.details = scope.gPlace.getPlace();
                var placeDetails = scope.details;
//              }
              scope.ngAutocomplete = element.val();
            });
          })
        }
        newAutocomplete();



    }
  };
});