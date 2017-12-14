"use strict";

if(!process || !process.argv || !process.argv[2]){
    console.error("Advent of Code Day 2: Please provide the file to process `node 2.js ~/file.txt`");
    process.exit();
}

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(`${file} does not exist`);
            return;
        }

        throw err;
    }

    const checksum = getChecksum(data);
    console.log(checksum);
});


function getChecksum (data) {
    const rows = data.trim().split(/\n/);
    let sum = 0;
    rows.forEach(row => {
        sum += findRowDiv(row);
    });
    return sum;
}

// Part 1
function findRowDiff (row) {
    const numbers = row.split(/\s+/);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return max-min;
}

// Part 2
function findRowDiv (row) {
    const numbers = row.split(/\s+/).sort((a,b) => b-a);

    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1; j < numbers.length ; j++){
            const num1 = numbers[i];
            const num2 = numbers[j];
            if(num1 % num2 == 0){
                return num1/num2;
            }
        }
    }
}

