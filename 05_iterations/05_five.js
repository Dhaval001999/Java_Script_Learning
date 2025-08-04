// array.forEach(element => {
    
// });// for each loop syntax very imp


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //  aama function ne call back kidhe lu che to ama function nu name na hoy atale apade direct bracket ma val lakhi didhi che
    // console.log(val);
// } ) // aa simple function ma thi karelu che

// coding.forEach( (item) => {
//     console.log(item);
// } ) // arrow function ma thi karelu che bt ama bhi same aj che karan k aa bhi call back che atale

// function printMe(item){
//     console.log(item);
// } // ama function banavyo printMe name no 

// coding.forEach(printMe) // ama khali anu reference apvanu che print to a apoap aj kari le se

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) // ama apade  array ni andar object ni andar for each lagavi ne ani property access kari nakhi che