/* global require, console, exports */
/* eslint-disable no-console */
var os = require('os'),
    colors = require('colors'),
    timeFormat = require('./timeFormat');
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = timeFormat.format(os.uptime()).formattedTime,
        userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.grey.bgWhite, cpu);
    console.log('Uptime: ~'.rainbow, uptime);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}
exports.print = getOSinfo;