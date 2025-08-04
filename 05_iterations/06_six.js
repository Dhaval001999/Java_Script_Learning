// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } ) // forEach koi bhi value return nathi karto bhale tame chaho k na chaho

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter

// const newNums = myNums.filter( (num) => num > 4) // forEach value return na kare bt filter value return kari sake ama aj karyu che // call back api ne apade ani andar condition api pade jm k ama api "num > 4"
// console.log(newNums); 


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) // filter bhi pota ni andar call back aj le che (atale simple function k arrow function) // jo tame avi ritna karo to return key word lakh vu pade km k ama scope open karya che atale ane pelama scope na hata atale ema return key word lakhva nu jaruri nathi


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } ) // same thing done bt with the help of forEach 

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);