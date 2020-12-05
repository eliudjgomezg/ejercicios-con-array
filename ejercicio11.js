//Definir en un nuevo arreglo el tipo de elemento que tiene cada propiedad

let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}]
let myArray = []

for(let i=1; i<=mix.length; i++){
    let type = typeof(mix[i-1])
    myArray.push(type)
}

console.log(myArray)
