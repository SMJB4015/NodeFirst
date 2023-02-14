const http = require('http') ;
const fs = require('fs') ;
const fsPromises = require('fs').promises ;
const logEvents = require('./logEvents') ;
const EventEmitter = require('events') ; 

class MyEvent extends EventEmitter {};

const myEvent = new MyEvent() ; 
// myEvent.on('log',(msg)=>{logEvents(msg)}) ;


// myEvent.emit('log','Event Loged') ;
