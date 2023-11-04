let [millisceconds,seconds,minutes,hours]=[0,0,0,0];
let timer=document.querySelector(".timer");
let int= null;

document.getElementById("start").addEventListener("click",()=>{
    if(int!==null)
    {
        clearInterval(int);
    }
    int=setInterval(displayTimer,10);
});

document.getElementById("pause").addEventListener("click",() =>{
    clearInterval(int);
});

document.getElementById("stop").addEventListener("click",() =>{
    clearInterval(int);
    [millisceconds,seconds,minutes,hours]=[0,0,0,0];
    timer.innerHTML= "00:00:00:000";
});

function displayTimer()
{
    millisceconds+=10;
    if(millisceconds==1000)
    {
        millisceconds=0;
        seconds++;
        if(seconds==60)
        {
            seconds=0;
            minutes++;
            if(minutes==60)
            {
                minutes=0;
                hours++;
            }
        }
    }
    let h=hours < 10 ? "0" + hours:hours;
    let m=minutes <10 ? "0" + minutes:minutes;
    let s= seconds <10 ? "0" + seconds:seconds;
    let ms= millisceconds<10 ? "00" + millisceconds: millisceconds < 100 ? "0" + millisceconds:millisceconds;
    timer.innerHTML= `${h} : ${m} :${s} : ${ms}`;
}

