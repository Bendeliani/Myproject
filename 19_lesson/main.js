let Y = Number(prompt());
let sum = 0;
while (Y) {
  let nashti = Y % 10;
  sum += nashti;
  Y = (Y - nashti) / 10;
}
console.log(sum);

// let i = 0
// while ( i < 10){
//     debugger;
//     console.log(i);
//     i++
// }

// ---------------------------------

// let count = 6;
// while ( count >= 0){
//     console.log(count);
//     count--;
// }

// ----------------------------------------
// let doCount = 3;
// do {
//   console.log(doCount);
//   doCount++;
// } while (doCount < 3);

// let number = Number(prompt("number"));
// if (isNaN(number)) {
//   alert("Try Again");
// }

// ----------------------------------------
// let inputNumber = Number("57164");
// let sym = 0;
// while (inputNumber) {
//   sum += inputNumber % 10;
//   inputNumber = (inputNumber / 10).toFixed();
// }
