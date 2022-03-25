// subtask 2: given the number, get the multiple of digits in it
let num = 266219;
let numArray = num.toString().split('').map(Number);
let multipleNum = numArray[0];

for (let i = 1; i < numArray.length; i++) {
  multipleNum *= numArray[i];
}

console.log(multipleNum);
// end of subtask 2

// subtask 3 and 4: exponentiate the number using only 1 operator (not Math.pow).
// Console.log first 2 digits of the result.
multipleNum = multipleNum**3;

const first2Str = String(multipleNum).slice(0, 2);
const first2Num = Number(first2Str);

console.log(first2Num);
// end of subtasks 3 and 4