const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) push a array into a array as a single element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) gives a new array by pushing elements of one array into another array
// console.log(allHeros);

//Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros] //gives a new array by pushing elements of multile arrays into one array

// console.log(all_new_heros); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Dheeraj"))
console.log(Array.from("Dheeraj"))
console.log(Array.from({name: "dheeraj"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));