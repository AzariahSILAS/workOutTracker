const savedWorkOuts = document.getElementById("savedWorkOuts");

const createP = document.createElement('p');


function saveWorkOut(){
    createP.innerText = "it worked!!!!!";
    savedWorkOuts.appendChild(createP);

    alert("its working");

}