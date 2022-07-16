// Pedir un número por prompt y en caso de que esté entre 10 y 50 mostrar un alert

let num1 = parseInt(prompt("Ingrese un número:"))

while(!isNaN(num1)){
    if (num1 > 10 && num1 < 50){
        alert("El número está entre 10 y 50")
    } else if (num1 < 10){
        alert("El número es menor que 10")
    } else if (num1 == 10){
        alert("El número es igual a 10")
    } else if (num1 == 50){
        alert("El número es igual a 50")
    } else {
        alert("El número es mayor a 50")
    }
    num1 = parseInt(prompt("Ingrese un número:"))
}