//map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) // map ane filter almost same aj che ama bhi return key word no upyog karvo pade jayre scope khulu hoy tyare // filter ma 1 2 vastu vadhare che ane map na comparision ma // you can compare it from google

const newNums = myNumers
                .map((num) => num * 10 ) // ama je bhi num ni value banse a agad vada num ma pass thai jase
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) // aane aj chaining kehvay

console.log(newNums);