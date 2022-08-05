

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();


// Function.prototype.myBind = function (context) {
//     return () => this.apply(context);
// };

Function.prototype.myBind = function(context){   //puppy.bark.myBind(kitty)
    let that = this;
    return function (){
        return that.apply(context); //if the specs says take in an array, use apply, if comma, use call
    }
}

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);



boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"