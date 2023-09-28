// function isPrime(x) {
//     if (x < 2) return false;

//     for (let i = x-1; i > 1; i--) {
//         if (x%i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = -10; i <15; i++) {
//     if(isPrime(i)) {
//         console.log(i);
//     }
// }

//dz 2

// function func(num, min, max) {
//     if(num < min){
//         return min ** 2;
//     }
//     else if(num > max){
//         return max ** 2;
//     }
//     else if(num < (max - (max - min)/2)){
//         return num ** 2;
//     }
//     else (
//         Math.round(num)
//     )
// }

// console.log(func(3, 1,10));
// console.log(func(15, 1, 10)); 
// console.log(func(5, 1, 10)); 
// console.log(func(8,5, 1, 10)); 


//dz 3
// var temp = 0;
// function isPerfectNumber(number){
//     for(var i=1;i<=number/2;i++) {
//         if(number%i === 0) {
//            temp += i;
//          }
//     }
//     if(temp === number && temp !== 0) {
//       return true;
//        }  
//      else {
//       return false;
//     } 
// }

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// dz 4
// const car1 =  document.getElementById('car');

// let car = {
//   name: 'Hendai Solaris',
// 	type: 'sedan',
// 	maxSpeed: '320',
// 	color: 'red',
// }

// function cars (){
//   return `
//   <article>
//   <div>
//       <h2>${car.name}</h2>
//       <span>${car.type}</span>
//   </div>
//   <div>
//       <span>Maximum speed:${car.maxSpeed}</span>
//   </div>
//   <div>
//       <span>Color:${car.color}</span>
//   </div>
// </article>`
// }

// car1.insertAdjacentHTML('beforeend',cars(car));


//dz 5 

// const sentence = "Hello, how are you?";

// function countWords(){
//   return sentence.split('').length;
// }

// console.log(countWords());


//dz 6 

// function generateGoogleString(oCount) {
//   // Проверяем, чтобы количество букв "o" было не менее 2
//   if (oCount < 2) {
//     return "Google";
//   }

//   // Создаем строку с заданным количеством "o"
//   const oString = "o".repeat(oCount);

//   // Возвращаем строку "Google" с добавленными "o" по краям
//   return `G${oString}gle`;
// }

// // Примеры использования:
// console.log(generateGoogleString(2)); // "Google"
// console.log(generateGoogleString(4)); // "Gooooogle"
// console.log(generateGoogleString(-2));

// dz 7 

