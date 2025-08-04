// if

// if syntax 
// if(condition){ // condition ma true thatu hase to j a if vada scope ma jase nahi tar nahi jaay
// }


const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== // avi ritna apade condition muki sakiye // "!" ane not na symbol tarike vapray che jm "!=" ane not equal to kehvaay



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power1: ${power}`); // ama error avse karan k aa scope ni bahar che ane scope ni bahar power nam nu kai che j nahi



// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // aa bhi sachu che bt aa ekj line ma execute thay che // ama aa mane le che k scope che // ama coma "," lagavi ne multiple line lakhi sakay bt a sari practice nathi.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // ane and kehvay "&&" aa sign ma bane baju check karse k bane sachu che k nahi ane jm upar lakhu ema pan three statement check karse k three statement true che k nahi
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // ane or kehvaay "||" ama koi bhi ek statement true hase to scope ma jatu rehse
    console.log("User logged in");
}