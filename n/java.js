let secondHand=document.querySelector(".second-hand");  
let minuteHand=document.querySelector(".minute-hand");
let hourHand=document.querySelector(".hour-hand");  


setInterval(clockRotating,1000); 

function clockRotating(){  
    var date=new Date();  
    var getSeconds=date.getSeconds()/60;  
    var getMinutes=date.getMinutes()/60;  
    var getHours=date.getHours()/12  

    secondHand.style.transform="rotate("+getSeconds*360 + "deg)"; 
    minuteHand.style.transform="rotate("+getMinutes*360 + "deg)";
    hourHand.style.transform="rotate("+getHours*360 + "deg)"; 

    document.querySelector(".current-day").innerHTML=date.toDateString(); 
    document.querySelector(".current-hour").innerHTML=date.getHours()+" : ";
    
    if(date.getMinutes()<10){
        document.querySelector(".current-minutes").innerHTML="0" + date.getMinutes()+" : ";
    }else{
        document.querySelector(".current-minutes").innerHTML=date.getMinutes()+" : ";
    }
    if(date.getSeconds()<10){
        document.querySelector(".current-seconds").innerHTML="0" + date.getSeconds();
    }else{
        document.querySelector(".current-seconds").innerHTML=date.getSeconds();
    }
}  