const savedWorkOuts = document.getElementById("savedWorkOuts");

const createP = document.createElement('p');


function saveWorkOut(){
    createP.innerText = "you did " +repAmount.innerText + " " + workOutText.innerText + " in " + minutes + " minutes" ;
    savedWorkOuts.appendChild(createP);
} 
