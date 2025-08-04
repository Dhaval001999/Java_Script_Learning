// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }  // for in loop syntax


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
} // object ma for in loop vapryo che

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
    // console.log(key);
} // array ma for in loop vapryo che ane ama khali (key) lakhiye to "js","rb","py" avu badhu na lakhe lu ave ema direct 0,1,2,3,4 avu lakhe lu ave che ek vakhat output nikade ne joi levo // for of loop ma key lakheye to j bhi value api hoy a avi jati hati ama atle for in loop ma avu kar vu hoy to (programming[key]) evu lakh vu pade example upar ape lo che

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] in map) {
    // console.log(key);
} // for in loop ma map iterable nathi jm for of loop ma object iterable nathi em