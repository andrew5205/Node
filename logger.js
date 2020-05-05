const EventEmitter = require('events');

// uuid => Universal Unique Identifier 
// 128-bit number 
const uuid = require('uuid');


// console.log(uuid);  // { v1: [Getter], v3: [Getter], v4: [Getter], v5: [Getter] }

// // v4 generate a random numbers 
// console.log(uuid.v4());     // 475e3b4a-28a4-4f95-85f1-94bcb059b005


// // v1 generate unique ID base on MAC address & a timer 
// console.log(uuid.v1());     // c294ac40-8ef0-11ea-84cc-157f19047645



class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg: msg });
    }
}

module.exports = Logger;




// sprerate on index.file 
// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));

// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');