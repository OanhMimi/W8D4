const { time } = require("console");

class Clock {
    constructor() {
        let date = new Date();
        let time = date.toLocaleTimeString();
        let hour = date.getHours();
        let second = date.getSeconds();
        let minute = date.getMinutes();
        time.printTime();

        if (time.includes("PM")) {
            hour = hour + 12;  
        };
        time = `${hour}:${minute}:${second}`



        
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
       let newSecond = second + 1; 
       if (newSecond => 60){
        second = newSecond % 60;
       minute = minute + 1;
            if (minute => 60) {
                minute = minute % 60; 
                hour = hour + 1;
                if (hour => 24) {
                    hour = hour % 24;
                }



            }
       }
       this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }

    

}

const clock = new Clock();

