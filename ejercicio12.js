
//Sumar todos los valores del array
let myArray = [2, 13, 34, 5]
let number = 0

for (let i = 1; i <= myArray.length; i++) {
    number = number + myArray[i - 1]
}

console.log(number)