// Question:- 
/** Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.*/ 



// example :- 
    // memoization:- apade koi function lakhiye to ema apade ek parameter pass kariye che to ema first time apade a function call karyie to thodo time lage che amuk milisecond lage bt avo ne avo pacho function call kariye toh bhi atali aj vaar lage to a apdo programe ne vadhare load pade ane time lage a bachava maate apade aa memoization no upyog kariye che j thi 1st time call karelo function cache ma store thai jaay che ane jyare same value hoy tyare a pacho function ne na call kare direct cache ma thi result api de.


function square(n){
    return n*n;
}
console.time();
console.log(square(5));
console.timeEnd();

function memoize(func){
    let cache = {}
    return function(...args){
        let n = args[0];
        if(n in cache){
            return cache[n]
        }else{
            let result = func(n)
            cache[n] = result
            return result
        }
    }
}

let memResult = memoize(square)

console.time();
console.log(memResult(5));
console.timeEnd();


// solution

function memoize(func){
    let cache = {}
    return function(...args){
        let n = JSON.stringify(args)
        if(n in cache){
            return cache[n]
        }else{
            let result = func.apply(this ,args)
            cache[n] = result
            return result
        }
    }
} 