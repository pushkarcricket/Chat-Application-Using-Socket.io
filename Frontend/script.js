// var socket = io();

// const btn=document.getElementById("btn")
// btn.onclick=function(){

//         socket.emit("event-from-client")
//         const div2= document.createElement("div");
//         div2.innerHTML="text is coming from Client"
//         document.body.append(div2)

        
    
// }

// const btn2= document.getElementById("btn2")

// btn2.onclick=function (){
//         socket.emit("event from others")
//         const h2=document.createElement("h2")
//         h2.innerText="message coming from others"
//         document.body.append(h2)
// }


// socket.on ("event-from-server", (test)=>{
//      console.log(test)

//      const div=document.createElement("div")
//      div.innerText="some thing is coming form server"
//      document.body.append(div)
// })


// socket.on("event form others" , (test1)=>{
//         console.log(test1)

//         const h2= document.createElement("h2");
//         h2.innerText="text coming form others"
//         document.body.append(h2)
// })
  var socket= io()
//   socket.emit("msg-from-others",{
//         msg:"hello form others peoples"
//   })

const button=document.getElementById("sndmsg");
const input= document.getElementById("inp");
const msglist= document.getElementById("msglist");
const pushkarbtn= document.getElementById("pushkarbtn")




socket.on("msg-from-pushkar",(data)=>{
        console.log("received from pushkar",data);
        const listItem= document.createElement("li");
        listItem.innerText= data.msg + "{from pushkar}"
        msglist.append(listItem);
})
button.onclick=function(){

        //publish

        socket.emit('msg-from-others',{
                msg:input.value
        })

        const listItem= document.createElement("li")
        listItem.innerText=input.value +"{from others}"
        msglist.append(listItem);

        input.value=' ';

}

pushkarbtn.onclick=function(){
        console.log("Pushkar button clicked")

        // socket.on("msg-from-pushkar",(data)=>{
        //         console.log(data)
        //         const litem= document.createElement("li");
        //         litem.innerText=data.msg +"{from pushkar}"
        //         msglist.append(litem)
        // }) 
        socket.emit("msg-from-others",{
                msg: "Hello from Pushkar button"
        })
        const listItem = document.createElement("li");
        listItem.innerText=input.value + "{from pushkar}"
        msglist.append(listItem)

        input.value=" ";
        
        

}



