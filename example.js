const travelTime = require('./index');

let t1 = {
    hours: 2,
    minutes: 25,
    secondes: 50
};

let t2 = {
    hours: 3,
    minutes: 22,
    secondes: 33
};

console.log(travelTime.calculate(t1, t2));
