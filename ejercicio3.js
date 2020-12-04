/*
Agrega 2 enteros aleatorios a la lista "arr" e imprime el 
arreglo en la consola.
*/

let arr = [4,5,734,43,45]

function number () {
    let number1 = Math.floor((Math.random()*100) + 1)
    return number1
}

arr.push(number(), number())

console.log(arr)