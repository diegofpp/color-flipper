//almacenamos los colores del background en un array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//seleccionamos el button
const btn = document.getElementById('btn')
//seleccionamos el span que mostrara el color seleccionado
const color = document.querySelector('.color')


 btn.addEventListener("click", function(){
    //al hacer click sobre btn llamamos a la funcion, la cual obtiene un numero aleatorio del array
    const randomNumbers = getRandomNumber();
    console.log(randomNumbers);

    //cambiamos el color del fondo de acuerdo al numero de indice del array colors
    document.body.style.backgroundColor = colors[randomNumbers];
    //imprimimos el color actual
    color.textContent = colors[randomNumbers];

 })

 function getRandomNumber(){
    //con floor redondeamos el numero decimal que entrega random al multiplicar por un numero del array
    return Math.floor(Math.random() * colors.length);
 }