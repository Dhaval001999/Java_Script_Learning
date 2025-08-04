// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);
// console.log(myArr[1])

// Array methods

// myArr.push(6) // push method array ma ek number add kare 
// myArr.push(7)
// myArr.pop() // pop method array ma number delete/remove kare 

// myArr.unshift(9) // unshift ma apade number add thay bt starting ma add thay 
// console.log(myArr);
// myArr.shift() // shift ma j bhi starting ma j bhi first number hoy a remove thai jaay 
// console.log(myArr)

// console.log(myArr.includes(9)); // includes no meaning a puche che k aa no. arr ma che k nai 
// console.log(myArr.indexOf(3)); // ama a puche che k a kai jagya a che ex:- ama apade puchuyu che k  kya che output 3 avyu karan k 3 third value par place hato koi biji value lkhiye ane a arr ma na hoy to -1 show karse

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);