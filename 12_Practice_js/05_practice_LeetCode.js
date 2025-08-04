// let arr = new Array(3) // constructor array // ek number lakhiye to a 3 size no empty array banave che
// console.log(arr);
// arr[0] = 2
// arr[1] = 4
// arr[2] = 5
// console.log(arr);

// let arr = new Array(3,5,6,7) // constructor array 
// console.log(arr);

// let arr = [2,3,4,5,6] // array lateral kehvaay


let arr = [1,2,3,4,5,6] 
// let m = arr.map(fun) // given array hoy ani j size no ek navo array create kare che ane j bhi ani upar function lagavanu che ane apply kari de che // aa juna array ne change na kare a as it is aj re

// let m = arr.map((n) => {
//     return n + 1;
// }) // avi ritna bhi thai sake

// let m = arr.map((n, i, num) => {
//     return n + i;
// })

// function fun(n){
//     return n + 1
// }

// console.log(a);
// console.log(arr);

// map syntax
// Array.map(function(currentValue, index, arr){
//     return currentValue + index + arr;
// }) 

let map = function(arr, fn){
    var newarr = []
    for(let i = 0;i < arr.length;i++){
        newarr[i] = fn(arr[i], i)
    }
    console.log(newarr);
    return newarr
} // Solution

console.log(map(arr))
