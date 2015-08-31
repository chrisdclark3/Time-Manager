app.controller('Schedules', function($scope, Schedule, $window) {

  $scope.tasks = Schedule.tasks;
  $scope.timeSlots = Schedule.timeSlots;
  $scope.startTime = Schedule.startTime;

	$scope.addTask = function(task, slot) {
    console.log("BIN", slot);
		var task = $scope.getTask(task);
    var index = (slot - $scope.startTime) / 15;
    console.log("INDEX", index);
    counter = 1;

    for (var i = index; index <  $scope.timeSlots.length; i++) {
      if (($scope.timeSlots[i].id - $scope.startTime) < task.duration) {
        console.log("time slots i", $scope.timeSlots[i].id, " - start time", $scope.startTime, " == task.duration", task.duration);
        counter++;
        continue;
      } else {
        break;
      }
    }
    $scope.tasks[$scope.findTask(task.id)].heightMult = counter;
    console.log("TASK WITH REVISED HEIGHT", $scope.tasks[$scope.findTask(task.id)]);
	};

  $scope.deleteTask = function(task, slot) {
    console.log("BIN", slot);
    var task = $scope.getTask(task);
    var index = (slot - $scope.startTime) / 15;
    console.log("INDEX", index);
    counter = 1;
    while (index < $scope.timeSlots.length && ($scope.timeSlots[index].id - $scope.startTime) < task.duration) {
      counter++;
    }
    $scope.tasks[$scope.findTask(task.id)].heightMult = counter;
    console.log("TASK WITH REVISED HEIGHT", $scope.tasks[$scope.findTask(task.id)]);
  };

  $scope.getTask = function (id) {
    for (var i = 0; i < $scope.tasks.length; i++) {
      if ($scope.tasks[i].id == id) {
        return $scope.tasks[i];
      }
    }
    return undefined;
  };

  $scope.findTask = function (id) {
    for (var i = 0; i < $scope.tasks.length; i++) {
      if ($scope.tasks[i].id == id) {
        return i;
      }
    }
    return undefined;
  };

  console.log("TIME SLOTS", $scope.timeSlots.length, "TASKS", $scope.tasks);

});