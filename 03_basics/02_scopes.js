//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
 // block scope and global scope 
 // global scope ne ek type nu  father scope kehvaay j child ne api sake atale glabal scope ma pade li vastu bija andar vada scope ma vapari sakiye
 // block scope ne kehvaay child scope j block scope ma padeli vastu father scope na lai sake  


// console.log(a);
// console.log(b);
// console.log(c);

//***************************************************************************************************** */

function one(){
    const username = "dhaval"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "dhaval"
    if (username === "dhaval") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}