$( document ).ready(function() {
    console.log("Ready!");

    /*
    // Provided
	var arrivalTime = moment({hour: 23, minute: 15});
	var driveDuration = moment.duration(900, 'seconds');
	var bufferDuration = moment.duration(300, 'seconds');
	var currentTime = moment();

    console.log(`The desired arrivalTime is ${arrivalTime.format('LT')}.`);
    console.log(`The expected driveDuration is ${driveDuration.asMinutes()} minutes.`);
    console.log(`The bufferDuration is ${bufferDuration.asMinutes()} minutes.`);

    // Calculated
	var totalDuration = driveDuration.add(bufferDuration);
	// var departureTime = arrivalTime.subtract(totalDuration);
	// var departureTime = moment(arrivalTime);
	// departureTime.subtract(totalDuration);
	var departureTime = moment(arrivalTime).subtract(totalDuration);

    console.log(`This means I should post a notification ${totalDuration.asMinutes()} minutes before the desired arrivalTime.`);
    console.log(`In other words, I should leave at ${departureTime.format('LT')}.`);
    console.log(`Note: The desired arrivalTime is still ${arrivalTime.format('LT')}.`);
    */

    $('button').on('click', function(event) {
    	// The next line prevents the page from reloading.
    	event.preventDefault();
    	console.log("You clicked the button!");

    	// Extract values from form
    	var arrivalHour = $('#arrivalHour').val();
    	var arrivalMinute = $('#arrivalMinute').val(); // This will return a string
    	var driveMinutes = $('#driveMinutes').val();
    	var bufferMinutes = $('#bufferMinutes').val();

    	// ArrivalTime
    	var arrivalTime = moment({hour: arrivalHour, minute: arrivalMinute});
    	// console.log(`The desired arrivalTime is ${arrivalTime.format('LT')}.`);

    	// Durations
    	var driveDuration = moment.duration(+driveMinutes, 'minutes');
		var bufferDuration = moment.duration(+bufferMinutes, 'minutes');
		// console.log(`The expected driveDuration is ${driveDuration.asMinutes()} minutes.`);
  //   	console.log(`The bufferDuration is ${bufferDuration.asMinutes()} minutes.`);
    	var totalDuration = moment(driveDuration).add(bufferDuration);

    	// notificationTime
    	// console.log(`arrivalTime is now ${arrivalTime.format('LT')}`);
    	
    	var departureTime = moment(arrivalTime).subtract(driveDuration);
    	// console.log(`Just calculated departureTime: ${departureTime.format('LT')}`);
    	// console.log(`arrivalTime is now ${arrivalTime.format('LT')}`);
		
		var notificationTime = moment(departureTime).subtract(bufferDuration);
		// var notificationTime = moment(arrivalTime).subtract(totalDuration);
    	// console.log(`Just calculated notificationTime: ${notificationTime.format('LT')}.`);
    	// console.log(`Just calculated notificationTime: ${notificationTime.format('LT')}. This is based on a totalDuration of ${totalDuration}.`);
		// console.log(`arrivalTime is now ${arrivalTime.format('LT')}`);
		// console.log(`This means I should post a notification ${totalDuration.asMinutes()} minutes before the desired arrivalTime.`);
    	// console.log(`In other words, I should issue a notification at ${notificationTime.format('LT')}.`);

    	// Alert
    	var currentTime = moment();
    	if (currentTime > notificationTime) {
    		alert("You are running late! Leave immediately!");
    	} else {
    		var message = `To arrive by ${arrivalTime.format('LT')}, you should leave by ${departureTime.format('LT')}. We will notify you at ${notificationTime.format('LT')}.`
    		alert(message);
    	}
    });
});