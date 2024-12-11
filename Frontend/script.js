var socket = io();

const btn=document.getElementById("btn")
btn.onclick=function(){

        socket.emit("event-from-client")
        const div2= document.createElement("div");
        div2.innerHTML="text is coming from Client"
        document.body.append(div2)

        
    
}


socket.on ("event-from-server", (test)=>{
     console.log(test)

     const div=document.createElement("div")
     div.innerText="some thing is coming form server"
     document.body.append(div)
})