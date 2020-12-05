//Filtrar todos los numeros 

let people = [1 ,'ana', 4,'daniella','stefany', 4,'barak']



const newArray = people.filter((item) => typeof(item) === 'number')

console.log(newArray)