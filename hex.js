 const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//seleccionamos el button
const btn = document.getElementById("btn");
//seleccionamos el span que mostrara el color seleccionado
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    //con floor redondeamos el numero decimal que entrega random al multiplicar por un numero del array
    return Math.floor(Math.random() * hex.length);
 }