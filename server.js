const http = require('http') ;
const fs = require('fs') ;
const fsPromises = require('fs').promises ;
const logEvents = require('./logEvents') ;
const EventEmitter = require('events') ; 

class MyEvent extends EventEmitter {};

const myEvent = new MyEvent() ; 
const PORT = process.env.PORT || 3500 ;
const server = http.createServer((req,res)=> {
    console.log(req.url,req.method) ;
})
server.listen(PORT,()=> console.log(`Server running on port ${PORT}`)) ;
// myEvent.on('log',(msg)=>{logEvents(msg)}) ;


// myEvent.emit('log','Event Loged') ;
