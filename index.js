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
// var input= document.getElementById("inp");

io.on('connection',(socket)=>{
    console.log(" user is connected")


    // setInterval(() => {
        
    // socket.emit("event-from-server")
    // }, 2000);

    // setInterval(() => {
    //     socket.emit("event form others")
        
    // }, 5000);

    // io.on("msg-from-others", (data)=>{
    //     console.log("coming data", data)
    //     const div= document.createElement("div")
    //     div.innerText=data.msg;
    //     document.body.append(div)
    // })
    socket.on('msg-from-others', (data)=>{
        console.log("hey");
        console.log(data)
    })


   
    socket.emit("message-from-pushkar",{
        msg:"welcome to the chat"
    })
   

})

