// const arrr= ['oleg','stapan', 'ivan', 'olga'];

// arrr.push('olena');

// arrr.unshift('olena');

// const first = arrr.shift();

// const first = arrr.pop();

// console.log(arrr.reverse());

// const reverse= arrr.toReversed();

// console.log(reverse);
// console.log(arrr);

// const letter = ['b','g','q','a']
// console.log(letter.sort());

// console.log(arrr.splice(1, 1));

// const gWoman = 'ivan';

// let i = arrr.indexOf(gWoman);
// console.log(i);

// const nameee = arrr.map(function(arrr){
//     return arrr.toUpperCase();
// });
// console.log(nameee);

// console.log(arrr.includes('ivan'));

const people = [
    {name:'ivan',budget:10000,},
    {name:'elena',budget:5000,},
    {name:'oleg',budget:1000,},
    {name:'stepan',budget:7000,}
]

// console.log(people.indexOf({budget:5000}));

// let findPerson ;

// for(let person of people){
//     if (person.budget === 5000)
//     findPerson = person;
// }
// console.log(findPerson);


// let findPerson = people.findIndex(function(person){
//     return person.budget ===5000;
// })
// console.log(findPerson);

// let find = people.find((p)=> p.budget ===5000)

// console.log(find);

// const filt = people.filter(function(p){
//     return p.budget>5000;
// })

// console.log(filt);

// let sumBug=0;

// filt.forEach(function(p){
//     sumBug+=p.budget;
// })

// console.log(sumBug);

// const sumBug = people
// .filter(p=> p.budget>5000)
// .map(p => p.budget)
// .reduce((acc, p)=>acc+p, 0);

// console.log(sumBug);


const str = 'hello, how are you?';
const reve = str.split('').toReversed().join('');

console.log(reve);
