//  Question:

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example:-

// solution:-
async function sleep(millis) {
    return new Promise(function(resolve){
        setTimeout(resolve, millis)
    })
}