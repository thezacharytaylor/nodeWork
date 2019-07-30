const Logger = require('./logger');
const fs = require('fs');
const logger = new Logger();

//logger.log();

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log(files);
// })

logger.on('messageLogging', (arg) => { console.log('Message logging', arg); })

logger.log('Holla');
