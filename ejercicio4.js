//Agrega 10 enteros aleatorios a un arreglo e imprime el 
//arreglo en la consola.

let myArray=[]

function number () {
    let number1 = Math.floor((Math.random()*100) + 1)
    return number1
}

for(let i=1; i<=10; i++){
    myArray.push(number())
}

console.log(myArray)