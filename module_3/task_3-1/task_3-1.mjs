"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 2;
if (wakeUpTime <= 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime <=8){
  printOut("I can take the train to school.")
} else{
  printOut ("I have to take the car to school.")
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = -2;

if (number < 0){
  printOut(number.toString() + " is negative")
} else if (number >0){
  printOut(number.toString() + " is positive")
} else{
  printOut(number.toString() + " is zero")
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getRandomInt(min, max){
  return Math.floor(Math.random() * (min - max + 1)) + min;
}

let pictureMP = getRandomInt(1, 8);
printOut("The picture is"+ (pictureMP.toString() + "MP"));

if (pictureMP  >= 6){
  printOut("The image is too large!");
} else if (pictureMP < 4){
  printOut("The image is too small");
} else{
  printOut("Thank you!");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthlist =["January", "February", "Mars", "April", "May", "June","July", "August", "September", "October", "November", "December"]
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31];  
const noOfMonth = 


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
