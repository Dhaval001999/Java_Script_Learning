let argumentsLength = function (...args){
    return args.length
} // solution of 9th problem





var once = function(fn) {
    let called = false;
    let result;

    return function(...args){
        if(!called){
            result = fn(...args)
            called = true;
            return result;
        }
        return undefined;
    }
}; //  solution of 10th problem