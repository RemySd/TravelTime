export function calculate(time1, time2) {
    let hrs, min, sec, hrsSup, minSup = 0;

    let hours1 = time1['hours'];
    let minutes1 = time1['minutes'];
    let secondes1 = time1['secondes'];

    let hours2 = time2['hours'];
    let minutes2 = time2['minutes'];
    let secondes2 = time2['secondes'];

    if (hours1 || hours2) {
        hrs = hours1 + hours2;
    }

    if (minutes1 || minutes2) {
        min = minutes1 + minutes2;
        hrs += ~~(min / 60);
        min = min % 60;
    }

    if (secondes1 || secondes2) {
        sec = secondes1 + secondes2;
        min += ~~(sec / 60);
        sec = sec % 60;
    }

    return (hrs + 'h' + min + 'min' + sec + 'sec')
}
