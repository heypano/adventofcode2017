"use strict";

if(!process || !process.argv || !process.argv[2]){
    console.error("Advent of Code Day 1: Please provide the file to process `node 1.js ~/file.txt`");
    process.exit();
}

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, input) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(`${file} does not exist`);
            return;
        }

        throw err;
    }

    const inputArr = input.split("");
    const lastIndex = inputArr.length - 1;
    const step = inputArr.length/2;
    let sum = 0;

    inputArr.forEach((e,i) => {
       let i2 = (i + step) % (lastIndex + 1);
       let e2 = inputArr[i2];
       if(e === e2){
         sum += +e;
       }
    })

    console.log(`Sum: ${sum}`);
});

