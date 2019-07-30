const logger = require('./logger');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

//logger.log();

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log(files);
// })

emitter.on('messageLogging', (arg) => { console.log('Message logging', arg); })

logger('Holla');
