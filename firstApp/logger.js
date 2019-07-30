const EventEmitter = require('events');
const emitter = new EventEmitter();

const url = 'https://duckduckgo.com';

class Logger extends EventEmitter {
    log(message = url) {
        console.log(message);
        emitter.emit('messageLogging', { message: 'Message is logging on Port 8.8.8.8' });
    }
}

module.exports = Logger;