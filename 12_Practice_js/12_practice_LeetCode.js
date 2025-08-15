// question:-
/**Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers. */

//example:-

        // synchronous = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

        // asynchronous = Allows multiple operations to be performed concurrently without waiting. 
//                        Doesn't block the execution flow and allows the program to continue.
//                        (I/O operation, network requests, fetching data)
//                        Hndled with callbacks, Promises, Async/Await
        // Async/Await = Async = makes a function return a promise
//                       Await = makes an async function wait for a promise


// synchronous
// console.log('task 1')
// console.log('task 2')
// console.log('task 3') // it executes line by line

// asynchronous
// setTimeout(function(){
//     console.log('task 1');
// },1000)
// console.log('task 2')
// console.log('task 3')

// promise:-
// const myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async Task")
//         resolve()
//     },2000)
// })

// myPromise.then(function(){
//     console.log('Promise Resolved')
// })

// new Promise((resolve, reject) => {
//     let fileloder = false;
//     if(fileloder){
//         resolve('file loaded')
//     }else{
//         reject('file not loaded')
//     }
// })
// .then(value => console.log(value))
// .catch(error => console.log(error))


// Async/Await // thi promise

function loaded(){
    return new Promise((resolve, reject) => {
        let fileLoader= false;
        if(fileLoader){
            resolve('file Loaded')
        }else{
            reject('file not loaded')
        }
    })
}

async function myFunction(){
    try{
        const value = await loaded()
        console.log(value)
    } catch(error){
        console.log(error)
    }    
}

myFunction()

// solution
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])
    
    return val1 + val2
};