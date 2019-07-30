const logger = require('./logger');
const fs = require('fs');

logger.log();

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log(files);
})