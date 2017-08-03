.directive('ngElevateZoom', function() {
  return {
    restrict: 'A',
    scope:{}
    link: function(scope, element, attrs) {
      element.attr('data-zoom-image',attrs.zoomImage);
      $(element).elevateZoom();
      // destroy your objects
      scope.$on('$destroy', function() {
           $('.zoomContainer').remove();
      });
    }
  };
});
