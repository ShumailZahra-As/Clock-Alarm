let alarmTime = null;
let soundPlayable = false; // Flag to track if sound is allowed

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

    // Trigger alarm when current time matches set alarm time
    if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
        triggerAlarm();
    }
}

// Set the alarm time
function setAlarm() {
    const alarmInput = document.getElementById("alarm-time").value;
    if (alarmInput && soundPlayable) {
        const [hours, minutes] = alarmInput.split(":");
        alarmTime = { hours: parseInt(hours), minutes: parseInt(minutes) };
        document.getElementById("alarm-message").classList.remove("hidden");
        document.getElementById("reset-alarm").classList.remove("hidden");
    } else {
        alert("Please start the page to enable sound.");
    }
}

// Function to trigger the alarm sound
function triggerAlarm() {
    if (soundPlayable) {
        const alarmSound = document.getElementById("alarm-sound");
        alarmSound.play().catch(function(error) {
            console.log("Error playing sound:", error);
            alert("The alarm sound could not be played.");
        });
        alert("ALARM! Time's up!");
        resetAlarm();
    }
}

// Reset the alarm and stop sound
function resetAlarm() {
    alarmTime = null;
    document.getElementById("alarm-message").classList.add("hidden");
    document.getElementById("reset-alarm").classList.add("hidden");
}

// Function to unlock sound playback
function start() {
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.play().catch(function(error) {
        console.log("Error playing sound:", error);
        alert("The alarm sound cannot be played yet. Ensure interaction.");
    });

    // Now the sound is allowed to play
    soundPlayable = true;
    document.getElementById("start-button").disabled = true; // Disable the start button after interaction
}

// Update the clock every second
setInterval(updateClock, 1000);
