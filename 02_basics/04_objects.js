
// const tinderUser = new Object() // aa ek singleton object che
const tinderUser = {} // aa singleton object nathi

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // avi ritna bhi thay 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dhaval",
            lastname: "desai"
        }
    }// aama object ni andar bijo object nakhyo che
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // ana thi barabar av tu nathi array vadi problem thai jaay che vevasti nathi dekha tu
// const obj3 = Object.assign({}, obj1, obj2, obj4) // ana thi ek dum vevastit set thai jase bt ana shivaay bhi che nniche vadi line ma

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // avi ritna karva thi a array bane jase ani apade array ni badhi property vapari saki su ama keys lidhi che 
// console.log(Object.values(tinderUser)); // ama values lidhi che 
// console.log(Object.entries(tinderUser)); // ane ama entries lidhi che jma first keys hoy ane second values hoy aa apade bahu ochu use ma ave che ek vakaht output ceck kari levao

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // aa property check kare k aa name thi koi property che k nai


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "dhaval"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "dhaval",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]