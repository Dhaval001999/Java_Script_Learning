
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // brackets na lagavo to reference thai jaay ane brackets lagavi do to execution thai jaay

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
} // koi bhi function ma return apade karavu pade karan k return pass karaya vagar koi bhi value return nahi thay // jm k apade ahiya return result lakyu che // ane direct bhi return kari sakiye

const result = addTwoNumbers(3, 5) // brackets ma arguments apaay

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// *******************************************************************************************************

function calculateCartPrice(val1, val2, ...num1){ // ama rest operator vapray ane rest operator ane spread opretor three dot thi j denote thay bs ana use case upar khaber pade k aa rest operator che k spread operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); // type safety jaruri che ama
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));