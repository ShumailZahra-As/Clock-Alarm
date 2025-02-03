let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    
    if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
        triggerAlarm();
    }
}

function setAlarm() {
    const alarmInput = document.getElementById("alarm-time").value;
    if (alarmInput) {
        const [hours, minutes] = alarmInput.split(":");
        alarmTime = { hours: parseInt(hours), minutes: parseInt(minutes) };
        document.getElementById("alarm-message").classList.remove("hidden");
        document.getElementById("reset-alarm").classList.remove("hidden");
    }
}

function triggerAlarm() {
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.play();
    alert("ALARM! Time's up!");
    resetAlarm();
}

function resetAlarm() {
    alarmTime = null;
    document.getElementById("alarm-message").classList.add("hidden");
    document.getElementById("reset-alarm").classList.add("hidden");
}

setInterval(updateClock, 1000);  // Update the clock every second
