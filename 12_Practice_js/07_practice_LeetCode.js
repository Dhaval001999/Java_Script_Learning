// syntax array.reduce
// array.reduce(function(accumulator, currentValue, currentIndex, arr))

let arr = [1,2,3,4,5]
let sum = arr.reduce((a,b) => {return a+b;}) // aa bhi sachi rit che 


let sum1 = arr.reduce(add)
function add(a, b){
    return a + b;
} // ane avi ritna bhi thai sake

console.log(sum);
console.log(sum1);


let reduce = function(nums, fn, init){
    let acc = init;
    for(let i = 0; i < nums.length; i++){
        acc = fn(acc, nums[i])
    }
    return acc;
} // solution
