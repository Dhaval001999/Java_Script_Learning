// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const element of object) {
    
// }// for of loop syntax

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
} // array par for of loop lagade lu che 

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == ' '){
    // console.log('detect space');
    break;
    }
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// map unique value mate popular che ema unique value j print thase ek aj jevi value print nahi thay

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
} // map ma for  loop lagade lu che

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    
// }  // object ma for of loop lagade lu che bt aa iterable nathi atale ama work nahi thay for of loop thi