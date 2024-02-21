function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // // Add leading zeros to single digit hours, minutes, and seconds
  // For example, if hours is 9, it becomes '09'.
  // If hours is 12, it remains 12.
  // Similarly, if minutes is 5, it becomes '05', and if it's 45, it remains 45.
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
