// Compara el elemento si es 1, inserta el número en el arreglo 1
// Compara el elemento si es 0, introduce "Yahoo" en el arreglo  (en lugar del número)
// Ejemplo de la salida para [0,0,1,1,0]:

// ['Yahoo','Yahoo','1','1','Yahoo']

let numbers = [0,0,1,1,0]
let returnArray = []

for(let i=1; i<=numbers.length; i++) {
    let item = numbers[i-1]
    if(item === 0){
        returnArray.push('Yahoo')
    }else{
        returnArray.push('1')
    }
}

console.log(returnArray)