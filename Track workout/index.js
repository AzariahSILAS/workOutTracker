const workOutText = document.getElementById("wrkTtex");

const workoutValue = document.getElementById("btnP");
const createinput = document.createElement("input");
//------------

//-----------creates input--------------|
createinput.type = "text";
createinput.className = "inputFiled"
workoutValue.appendChild(createinput); 
createinput.style.display = "none";
//--------------------------------------|

//------------------Event listners for the inputfiled-------|
workOutText.addEventListener("dblclick", editWorkoutName);
createinput.addEventListener("dblclick", endEdit);
//----------------------------------------------------------|

//------------------functions for the inputfiled-------|
function editWorkoutName(){ 
    createinput.style.display = "block";
    workOutText.style.display = "none"
}

function endEdit(){
    if(createinput.value !=""){
        createinput.style.display = "none";
        workOutText.style.display = "block";
        workOutText.textContent = createinput.value;
    } else {
        createinput.value = "add workout"
    }
    
}
//------------------------------------------------------|

//---------------------------set size block---------------------------|
const stSizeContainer = document.getElementById("stSizeContainer");
const stsizValue = document.getElementById("stsizValue");
const setSizinpt = document.createElement("input");


setSizinpt.type = "number"
stSizeContainer.appendChild(setSizinpt)
setSizinpt.style.display = "none"
setSizinpt.style.marginTop = "14px"


stsizValue.addEventListener("dblclick", editSet);
setSizinpt.addEventListener("dblclick", saveSet);


function editSet() {
    stsizValue.style.display = "none";
    setSizinpt.style.display = "block";
}

function saveSet(){
    if(setSizinpt.value !=""){
        stsizValue.style.display = "block";
        setSizinpt.style.display = "none";
        stsizValue.innerText = setSizinpt.value;
    } else setSizinpt.value = 0;
}
//---------------------------------------------------------------------|

//----------------------Add repetition Button--------------|

const addRepBtn = document.getElementById("addRep");
const repAmount = document.getElementById("repAmount");

addRepBtn.addEventListener("click", addRepetition); 


function addRepetition() {
    let currentAmount = parseInt(repAmount.innerText) || 0;
    let addAmount = parseInt(stsizValue.innerText) || 0;
    repAmount.innerText = currentAmount + addAmount;
}
//-----------------------------------------------------------|


const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const stopWatchDisplay = document.getElementById("stopWtc");

let [seconds, minutes, hours] = [0,0,0];
let timer = null

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    stopWatchDisplay.innerHTML = h +":"+ m +":"+ s;
}

function startWatch(){
    if(timer !== null)[
        clearInterval(timer)
    ]
    timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer)
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    stopWatchDisplay.innerHTML = "00:00:00";
}
