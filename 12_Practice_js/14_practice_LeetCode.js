// question:-

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// example

// setTimeout:= function in JavaScript that allows you to schedule the execution of a function fter an  
//              amount execution of a function after an amount of time (milliseconds)

// clearTimeout:= can cancel a timeout before it triggeers

function greet (){
    console.log("Hello World")
}
let timeId = setTimeout(greet, 1000)

clearTimeout(timeId);

//solution
let cancellable = function(fn, args, t){
const timer = setTimeout(function(){fn(...args)},t)
const cancelFn = function(){
    clearTimeout(timer)
}
return cancelFn;

}
