module.exports = {
    calculate: function () {

        let hours = [];
        let minutes = [];
        let secondes = [];

        for (let i = 0; i < arguments.length; ++i) {
            if (arguments[i].hasOwnProperty('hours')) {
                hours.push(arguments[i].hours)
            }

            if (arguments[i].hasOwnProperty('minutes')) {
                minutes.push(arguments[i].minutes)
            }

            if (arguments[i].hasOwnProperty('secondes')) {
                secondes.push(arguments[i].secondes)
            }
        }

        let hrs = 0;
        let min = 0;
        let sec = 0;

        hours.forEach(function(element) {
            hrs += element;
        });

        minutes.forEach(function(element) {
            min += element;
        });

        secondes.forEach(function(element) {
            sec += element;
        });

        // When the number of hours if egal or highter than 60
        hrs += ~~(min / 60);
        // we keep the numbers of minute
        min = min % 60;

        min += ~~(sec / 60);
        sec = sec % 60;

        return {
            hours: hrs,
            minutes: min,
            secondes: sec
        };
    }
};
