const workOutText = document.getElementById("wrkTtex");

const stopWatch = document.getElementById("stopWtc");
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
