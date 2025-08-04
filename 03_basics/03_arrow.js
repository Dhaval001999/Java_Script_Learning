const user = {
    username: "dhaval",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "dam"
// user.welcomeMessage()

// console.log(this);


// function chai1(){
//     let username = "dhaval"
//     console.log(this.username);
//     console.log(this);
// } // function ni andar this no use nathi thai sakto undefined lakelu ave che bt ha eklo this print karo to print thai jase ane bahu badhu output avse please check

// chai1()

// const chai = function () {
//     let username = "dhaval"
//     console.log(this.username);
// }

//arrow function ni andar this nathi hotu

const chai =  () => {
    let username = "dhaval"
    console.log(this);
}
// arrow ma bhi same thay che eklu run thase ane this.username vagere apisu to  run nai thay ane undefined lakelu avi jase


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// apade curly brackets ma lakeye to return keyword lakvu padse ane simple brackets "()" ma lakhyu to return na lakhvu pade upar vadi line ma jovu 

const addTwo = (num1, num2) => ({username: "dhaval"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()