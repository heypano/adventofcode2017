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
    const rows = data.split(/\n/);
    let sum = 0;
    rows.forEach(row => {
        sum += findRowDiff(row);
    })
    return sum;
}

function findRowDiff (row) {
    const numbers = row.split(/\s+/);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return max-min;
}