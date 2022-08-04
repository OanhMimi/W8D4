const { time } = require("console");

class Clock {
    constructor() {
        this.date = new Date();
        this.time = this.date;
        this.hour = this.date.getHours();
        this.second = this.date.getSeconds();
        this.minute = this.date.getMinutes();
       

      


        this.printTime();

      setInterval(
            this._tick.bind(this)
        , 1000)
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(`${this.hour}:${this.minute}:${this.second}`)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
       this.second++; 

       if (this.second >= 60){
        this.second = this.second % 60;
       this.minute = this.minute + 1;}

        if (this.minute >= 60) {
            this.minute = this.minute % 60; 
            this.hour = this.hour + 1;}

        if (this.hour >= 24) {
            this.hour = this.hour % 24;
        }

       this.printTime();
    //     // 1. Increment the time by one second.
    //     // 2. Call printTime.
    }

    

}

const clock = new Clock();


