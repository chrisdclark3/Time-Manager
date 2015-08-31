app.directive('extendable', function($window) {
    return {
        restrict: 'A',

        link: function(scope, elem, attrs) {
            scope.$watch('elem.heightMult', function(value) {
                elem.css('height', 24 * value + 'px !important');
            });
            console.log("SCOPE", scope, "ELEMENT", elem, "ATTRS", attrs);
        }
    };
});