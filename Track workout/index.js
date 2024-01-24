const workOutText = document.getElementById("wrkTtex");
const stsizValue = document.getElementById("stsizValue");
const addRepBtn = document.getElementById("addRep");
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


