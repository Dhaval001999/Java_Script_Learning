const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n("zero n lakhe lu che"), "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},

// more truthy equaction 
// false == 0, false == '', 0 == '' // aa badhi truthy value kehvaay

// if (userEmail.length === 0) { // userEmail.length === 0 aa ek truthy value che
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj).length === 0 aabhi ek truthy value che
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined  // aa operator hamesha null ane undefined ne lai ne j kaam karse

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator // condition ? true : false // ane terniary operator kehvaay

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")