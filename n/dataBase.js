

const btnAlarm=document.querySelector(".setCountdown");
const btn = document.querySelector(".done");
btnAlarm.addEventListener("click",function(){
    document.querySelector(".setAlarmTime").style.display="block";
})

setInterval(timeChanging,1000);

btn.addEventListener("click", function(){
    

    timeChanging();

    // hiding the popup
    document.querySelector(".setAlarmTime").style.display="none";

    
})
function timeChanging(){
    const Minutes = document.querySelector(".Minutes").value;
    
    
    const Hours = document.querySelector(".Hours").value;
 

    const Seconds = document.querySelector(".Seconds").value;
    var date = new Date();
    var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Hours, Minutes, Seconds);
    let rem=date2-date;
    
    localStorage.remHours = Math.floor(rem / 1000 / 60 / 60 );
    localStorage.remMinutes = Math.floor(rem/1000/60);
    localStorage.remSeconds = Math.floor((rem/1000)%60);


    document.querySelector(".count-down").innerHTML="Remaining Time : "+ localStorage.remHours + " hr " + localStorage.remMinutes + " min "+ localStorage.remSeconds + " sec ";
}





