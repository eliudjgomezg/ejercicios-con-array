// Contar las letras y colocarlas en un objeto
// Should print on the console { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

const word = "Hello World"
const myArray = word.split('')
let myObject = {
    h: 0, e: 0, l: 0, o: 0, w: 0, r: 0, d: 0
}

for (let i = 1; i <= myArray.length; i++) {


    if (myArray[i - 1].toLowerCase() === 'h') {
        myObject.h = myObject.h + 1
    } else {
        if (myArray[i - 1] === 'e') {
            myObject.e = myObject.e + 1
        } else {
            if (myArray[i - 1] === 'l') {
                myObject.l = myObject.l + 1
            } else {
                if (myArray[i - 1] === 'o') {
                    myObject.o = myObject.o + 1
                } else {
                    if (myArray[i - 1].toLowerCase() === 'w') {
                        myObject.w = myObject.w + 1
                    } else {
                        if (myArray[i - 1] === 'r') {
                            myObject.r = myObject.r + 1
                        } else {
                            if (myArray[i - 1] === 'd') {
                                myObject.d = myObject.d + 1
                            }
                        }
                    }
                }
            }
        }
    }

    
}

console.log(myObject)






