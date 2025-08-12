// Function transform // Function Composition

function add(a, b){
    return a + b;
}

function mulTwo(val){
    return val * 2;
}

function square(val){
    return val * val;
}

// const result = add(2, 3)
// console.log(square(result)); // aavu apade ghadi ghadi na lakhi sakiye atale apade ano function banviye

function addSquare(a, b){
    return square(add(a, b));
}

// console.log(addSquare(3, 4));

// have aa upar na three operation aapade perform karva hoy to apade alag function banvo pade // bt jo five hoy to pacho alag function banavo pade atale have a na karvu pade atale apade navo function  banaviye // to have apade a banaviye

function compose(f1, f2){
    return function(a, b){
        return f2(f1(a, b));
    }

}

const composeTwo = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b))); // upar j hatu aj che bt a simple function thi karyu ane aa arrow function thi karyu

const result = compose(add, mulTwo);
console.log(result(2, 3));

const result1 = composeTwo(add, mulTwo, square);
console.log(result1(2, 3));

// ama to apade ne khaber hati k ketla function che bt unlimited function hoy to su karvu have apde joi laiye

function composeAll(...funcs){
    return function(...values){
        return funcs.reduce((val, fn, index) => {
            if(index === 0){
                return fn(...val)
            } // jo single value pass thay toh
            return fn(val);
        },values);
    }
}


const result2 = composeAll(add, mulTwo, square);
console.log(result2(2,5));




// let compose = function(functions){
//     return function(x){
//         for(let i = functions.length - 1; i >= 0; i--){
//             x = functions[i](x)
//         }
//     }
// } // solution