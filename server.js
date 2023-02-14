const logEvents = require('./logEvents') ;
const EventEmitter = require('events') ; 

class MyEvent extends EventEmitter {};

const myEvent = new MyEvent() ; 
myEvent.on('log',(msg)=>{logEvents(msg)}) ;

setTimeout(()=>{
    myEvent.emit('log','Event Loged') ;
},2000);