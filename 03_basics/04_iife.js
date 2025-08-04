// Immediately Invoked Function Expressions (IIFE)

//  interview mate : global scope na pollution thi problem thay che ketali var to na thay atale apade iife no upyog kariye che 

// iife Syntax
//   ()(); // semicolon lagavu jaruri che to j end thase nahi 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('dhaval')

// next video is 25 theory 
