"use strict";

if(!process || !process.argv || !process.argv[2]){
    console.error("Advent of Code Day 1: Please provide the string to parse as the first argument when calling `node 1.js 123123`");
    process.exit();
}

const input = process.argv[2];
const inputArr = input.split("");
const lastIndex = inputArr.length - 1;
let sum = 0;

inputArr.forEach((e,i) => {
   let e2 = (i === lastIndex) ? inputArr[0] : inputArr[i+1];
   if(e === e2){
     sum += +e;
   }
})

console.log(`Sum: ${sum}`);