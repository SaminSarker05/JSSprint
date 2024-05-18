// use events module 
const EventEmitter = require('events');

// inheriting to make custom emitter
// on to list
// emit to emit
const custom = new EventEmitter();

// if a response is emitted callback function called
custom.on('response', (name) => {
  console.log('data received by', name);
});

// puts out a response; must happen after event lister is set
custom.emit('response', "samin");



