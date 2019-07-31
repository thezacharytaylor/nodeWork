const Logger = require('./logger');
const fs = require('fs');
const logger = new Logger();

const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//logger.log();

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log(files);
// })

logger.on('messageLogging', (arg) => { console.log('Message logging', arg); })

logger.log('Holla');

server.listen(3000);
console.log('Listening on Port 3000');
