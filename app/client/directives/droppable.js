app.directive('droppable', function() {
	return {
		scope: {
			drop: '&',
			bin: '='
		},
		link: function(scope, element) {

			var el = element[0];

			el.addEventListener('dragover', function(e) {
				e.dataTransfer.dropEffect = 'move';
				if (e.preventDefault) {
					e.preventDefault();
				}
				this.classList.add('over');
				return false;
			}, false);

			el.addEventListener('dragenter', function(e) {
				this.classList.add('over');
				return false;
			}, false);

			el.addEventListener('dragleave', function(e) {
				this.classList.remove('over');
				return false;
			}, false);

			el.addEventListener('drop', function(e) {
				// Stops some browsers from redirecting.
				if (e.stopPropagation) {
					e.stopPropagation();
				}
				var binId = this.id;
				var item = document.getElementById(e.dataTransfer.getData('Text'));
                console.log("ITEM", item);
				this.appendChild(item);
				// call the passed drop function
				scope.$apply(function(scope) {
					var fn = scope.drop();
					if ('undefined' !== typeof fn) {
						fn(item.id, binId);
					}
				});
			});
		}
	};
});