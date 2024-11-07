//Verifico l'elemento
const lamp1 = document.getElementById("white");
console.log(lamp1);
console.log(lamp1.src);

//Funzione callback per reagire all'evento del click del bottone
const button = document.getElementById("on-btn");
console.log(button); // -> verifico il bottone

button.addEventListener("click", function() {
    lamp1.src = "./img/yellow_lamp.png";
    lamp1.alt = "lampadina accesa";

    if(lamp1.classList.contains("off")) {
        lamp1.classList.remove("off")
        button.innerHTML = "Spegni"
    } else {
        lamp1.classList.add("off")
        button.innerHTML = "Accendi"
        lamp1.src = "./img/white_lamp.png"
    }
}
);