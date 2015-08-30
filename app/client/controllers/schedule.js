app.controller('Schedules', function($scope, Schedule, $window) {

  $scope.tasks = Schedule.tasks;
  $scope.timeSlots = Schedule.timeSlots;

	$scope.setTask = function(task, bin) {
		console.log("TASK", task, "BIN", bin);
	};

  console.log("TIME SLOTS", $scope.timeSlots.length, "TASKS", $scope.tasks);

});