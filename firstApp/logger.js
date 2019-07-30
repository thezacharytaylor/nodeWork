const EventEmitter = require('events');

const url = 'https://duckduckgo.com';

class Logger extends EventEmitter {
    log(message = url) {
        console.log(message);
        this.emit('messageLogging', { message: 'Message is logging on Port 8.8.8.8' });
    }
}

module.exports = Logger;