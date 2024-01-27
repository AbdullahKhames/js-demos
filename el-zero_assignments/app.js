import firstTask from "./assignment1.js";
import addEl from "./assignment2.js";
import taskThree from "./assignment3.js";
import checkRange from "./assignment4.js";
import replaceFirstWithLast from "./assignment5.js";
import { checkBiggestNum } from "./assignment6.js";
import getTwoHighest from "./assignment7.js";
import closestToTarget from "./assignment8.js";
import swapEveryTwoChars from "./assignment9.js";
// import  elzeroRepeat from "./assignment10.js";
import formatNumber from "./assignment11.js";
import sameFirstAndLastIgnoreCase from "./assignment12.js";
import sliceDemo from "./assignment13.js";
import repeatWithRules from "./assignment14.js";
import concatenateWithoutLast from "./assignment15.js";
import  getCharacters from "./assignment16.js";
import  formatName from "./assignment17.js";
import * as  Capitalizer from "./assignment18.js";
import  arrangeStr from "./assignment19.js";
import * as Finder from "./assignment20.js";
import  getLastDigit from "./assignment21.js";
import  concatTwoString from "./assignment22.js";
// import  firstTask from "./assignment23.js";
import  dashBetweenOdd from "./assignment24.js";
import {
  clearArr1,
  clearArr2,
  clearArr3,
  clearArr4,
  clearArr5,
} from "./assignment25.js";
import {
  clearDup1,
  clearDup2,
  clearDup3,
  clearDup4,
  clearDup5,
  clearDup6
} from "./assignment26.js";
import  getNameFormASCII from "./assignment27.js";
import  customMerge from "./assignment28.js";
// import  firstTask from "./assignment29.js";
// import  addEl from "./assignment30.j.jss);
// import  firstTask from "./assignment31.js";
// import  addEl from "./assignment32.js";
// import  firstTask from "./assignment34.js";
// import  addEl from "./assignment35.js";
// import  firstTask from "./assignment36.js";
// import  addEl from "./assignment37.js";
// import  firstTask from "./assignment38.js";
// import  addEl from "./assignment39.js";
// import  firstTask from "./assignment40.js";
// import  addEl from "./assignment41.js";
// import  firstTask from "./assignment42.js";
// import  addEl from "./assignment43.js";
// import  firstTask from "./assignment44.js";
// import  addEl from "./assignment45.js";
// import  firstTask from "./assignment46.js";
// import  addEl from "./assignment47.js";
// import  firstTask from "./assignment48.js";
// import  addEl from "./assignment49.js";
// import  firstTask from "./assignment50.js";
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
firstTask();
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log(addEl("hamada"));
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
console.log("-".repeat(50));

// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
taskThree();
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 6
console.log("-".repeat(50));
console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 7
console.log("-".repeat(50));
console.log(getTwoHighest([20, 100, 50, 10, 15, -20, 30]));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 8
console.log("-".repeat(50));
console.log(closestToTarget([10, 80, 85, 25, 30, 88, 15], 100));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 9
console.log("-".repeat(50));
console.log(swapEveryTwoChars("hamada"));
console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 10
console.log("-".repeat(50));
String.prototype.elzeroRepeat = function (repeats) {
  let temp = "";
  for (let index = 0; index < repeats; index++) {
    temp += this;
  }
  return temp;
};
console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 11
console.log("-".repeat(50));
console.log(formatNumber(123456789));
console.log(formatNumber(5301503206));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 12
console.log("-".repeat(50));
console.log(
  sameFirstAndLastIgnoreCase(["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"])
);
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 13
console.log("-".repeat(50));
sliceDemo("Elzero");
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 14
console.log("-".repeat(50));
console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 15
console.log("-".repeat(50));
console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"]));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 16
console.log("-".repeat(50));
console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 17
console.log("-".repeat(50));
console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 18
console.log("-".repeat(50));
Capitalizer.capitalizeFLetterSimple("elzero web");
Capitalizer.capitalizeFLetterSlice("elzero web");
Capitalizer.capitalizeFLetterCharAt("elzero web");
Capitalizer.capitalizeFLetterReplace("elzero web");
Capitalizer.capitalizeFLetterSplitMapJoin("elzero web");
Capitalizer.capitalizeFLetterSpreadAndJoin("elzero web");
Capitalizer.capitalizeFLetterArrowFuncWithTemplateLiterals("elzero web");

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 19
console.log("-".repeat(50));
console.log(arrangeStr("Web SchoolElzero "));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
//task 20
console.log("-".repeat(50));
Finder.getLLetterSimple("elzero web");
Finder.getLLetterSlice("elzero web");
Finder.getLLetterCharAt("elzero web");
Finder.getLLetterMatch("elzero web");
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 21
console.log("-".repeat(50));
console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 22
console.log("-".repeat(50));
console.log(concatTwoString("AElzero", "ZAcademy"));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 23
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 24 
console.log("-".repeat(50));
console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 25
console.log("-".repeat(50));
let myArr1 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log(clearArr1(myArr1));
// myArr1.length = 5;
// console.log(myArr1);
let myArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log(clearArr2(myArr2));
let myArr3 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log(clearArr3(myArr3));
let myArr4 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log(clearArr4(myArr4));
let myArr5 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log(clearArr5(myArr5));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// task 26
console.log("-".repeat(50));
// using frequency array with splice method
let dupArr1 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
clearDup1(dupArr1);
// console.log(clearArr1(dupArr1));
// myArr1.length = 5;
console.log(dupArr1);

// using set the spreading into an on the fly array
let dupArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// clearDup2(dupArr2);
console.log([...clearDup2(dupArr2)]);
// console.log(dupArr2);

// using filter method
let dupArr3 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// clearDup3(dupArr3);
// console.log(dupArr3);

console.log(clearDup3(dupArr3));
let dupArr4 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// clearDup4(dupArr4);
// console.log(dupArr4);
console.log(clearDup4(dupArr4));

let dupArr5 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// clearDup5(dupArr5);
// console.log(dupArr5);
console.log(clearDup5(dupArr5));


let dupArr6 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// clearDup5(dupArr5);
// console.log(dupArr5);
console.log(clearDup6(dupArr6));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
console.log(getNameFormASCII(["69", "108", "122", "101", "114", "111"]));
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));
console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);
console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
console.log("-".repeat(50));

console.log("-".repeat(50));
// -------------------------------------------------------------------------------------------------------------------------------
