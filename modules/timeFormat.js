/* global exports */
/* eslint-disable no-console */
function timeFormat(amount) {
    var time = new Object();
    time.days = (amount / 86400).toFixed(0);
    time.hours = ((amount % 86400) / 3600).toFixed(0);
    time.minutes = ((amount % 3600) / 60).toFixed(0);
    time.seconds = (amount % 60).toFixed(0);
    time.formattedTime = time.days + ' dni ' + time.hours + ' godz. ' + time.minutes + ' min. ' + time.seconds + ' sek. ';
    return time;
}
exports.format = timeFormat;