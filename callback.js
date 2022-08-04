const { time } = require("console");

class Clock {
    constructor() {
        let date = new Date();
        let time = date.toLocaleTimeString();
        time.printTime();
        setInterval(() => {
            time._tick()
        }, 1000)
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(time)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
    
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }

    

}

const clock = new Clock();

