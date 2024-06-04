let body=document.querySelector("body");
let colorchange=document.querySelector("#colorchange");
let stopColor=document.querySelector("#stop");

let intervalId;

colorchange.addEventListener("click",()=>{

     intervalId=setInterval(()=>{
        let red=Math.floor(Math.random()*256);
        let green=Math.floor(Math.random()*256);
        let blue=Math.floor(Math.random()*256);
        let rgb=`rgb(${red},${green},${blue})`
        body.style.backgroundColor=rgb;
        
    },1000);
    
})

stopColor.addEventListener("click",()=>{
    clearInterval(intervalId)
})



