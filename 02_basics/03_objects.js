// object is a key value pairs

// singleton :- koi bhi constructor thi apade banavi ye to singleton ek object bane che ane aa ani khud ni jevo ek aj object che // bt jyare apade biji taraf thi banaviye to aa singleton nathi hoto anoo multiple instances thai jaay che // interview ma puche to aetalu dhyan rakhvu k jyare bhi apade literals ni jm declare kariye to singleton nathi ban tu atalu dhyan rakhvu constructor thi bane to ha hamesha singleton banse bs atalu dhyan rakhvu 


// Object.create // j rit che aane j kehvaay constructor method k through ane aani andar aj singleton bane che

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dhaval", // ama name, "full name",[mysum]etc aa badha ne keys kehvaay,  Dhaval,Dhaval Desai,mykey1,jaipur etc aa badhane values kehvaay
    "full name": "Dhaval Desai",
    [mySym]: "mykey1", // symbol declare karvo hoy object ma to avi ritna aj declare thay 
    age: 18,
    location: "Jaipur",
    email: "dhaval@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // avi ritna object access thay bt aa sachi rit nathi
// console.log(JsUser["email"])  // aa schi rit che avi ritna j object ne access karay
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // ane avi ritna symbol access thay

JsUser.email = "dhaval@chatgpt.com"
// Object.freeze(JsUser) // freeze ma value lock thai jaay pachi koi change na kari sake
JsUser.email = "dhaval@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());