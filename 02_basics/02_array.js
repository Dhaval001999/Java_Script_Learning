const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // ana thi push thi babar ek array ma array na bane alag thi bija ne array lai le

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// concat lagava thi ekdum vevastit array bani jase 
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // three dot lagava thi pan same concat ma thay avu thai jaay (ani spread operator kehvaay)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat(Infinity) aa lagava thi apade ne jetla bhi array ni andar array hoy a badha ekarray thai ne apadi same ave 
// console.log(real_another_array);



console.log(Array.isArray("Dhaval")) // ama aa puche che k arr che k nai 
console.log(Array.from("Dhaval")) // ama Dhaval ne ek array banavi de se 
console.log(Array.from({name: "Dhaval"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));