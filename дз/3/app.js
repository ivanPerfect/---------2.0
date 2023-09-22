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
var temp = 0;
function isPerfectNumber(number){
    for(var i=1;i<=number/2;i++) {
        if(number%i === 0) {
           temp += i;
         }
    }
    if(temp === number && temp !== 0) {
      return true;
       }  
     else {
      return false;
    } 
}

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false