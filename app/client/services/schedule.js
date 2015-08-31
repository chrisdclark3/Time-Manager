app.factory('Schedule', function(localStorageService, $rootScope) {

	var factory = {};

	var Task = function(title, duration) {
		// need a better hashing function for id here
		this.id = Math.floor(Math.random() * 100000);
		this.title = typeof title === "undefined" ? "" : title;
		this.duration = duration;
		this.scheduled = false;
    this.heightMult = 1;
	};

	var TimeSlot = function(inc) {
		this.id = factory.startTime + (15 * inc);
		this.visibile = true;
		var setTime = function() {
			var today = new Date();
			var d = today.getDate(),
			m = today.getMonth(),
			y = today.getFullYear(),
			mm = this.id % 15,
			hh = Math.floor(this.id / 60);
			return new Date(y, m, d, hh, mm, 0, 0);
		};
    this.date = setTime.call(this);
	};



factory.startTime = 6 * 60; factory.endTime = 18 * 60; factory.timeSlots = [];

factory.setTimeSlots = function() {
	var length = (factory.endTime - factory.startTime) / 15
	for (var i = 0; i <= length; i++) {
		factory.timeSlots.push(new TimeSlot(i));
	}
};

factory.setTimeSlots();

factory.tasks = [];

factory.tasks.push(new Task('Go to the grocery store', 120)); factory.tasks.push(new Task('Code home page', 240)); factory.tasks.push(new Task('Go to the gym', 90));

return factory;

});