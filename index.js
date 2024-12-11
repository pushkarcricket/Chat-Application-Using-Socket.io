const express=require("express");
const app=express()
const http = require('http');
const server = http.createServer(app);
const socketio=require("socket.io")
const io = socketio(server)
const path= require('path')


app.use(express.static(path.join(__dirname, "Frontend")))



server.listen(5000, ()=>{


    // setInterval(()=>{
    //     io.on('connection',()=>{
    //         console.log("a user connected")
    //     })

    // },2000)
    console.log("server is runing on 5000")
})

io.on('connection',(socket)=>{
    console.log("a user is connected")


    setInterval(() => {
        
    socket.emit("event-from-server")
    }, 2000);

})