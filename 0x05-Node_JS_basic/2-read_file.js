// This module reads from a file
const { parse } = require('csv-parse');
const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        parse(data, { columns: true, trim: true }, (err, records) => {
            if (err) {
                throw new Error('Error parsing CSV data');
            }
            const totalSt = records.length;
            console.log(`Number of students: ${totalSt}`);
            let stuCs = 0;
            let stuSwe = 0;
            const csAr = [];
            const sweAr = [];
            for (let i = 0; i < totalSt; i += 1) {
                if (records[i].field === 'CS') {
                    stuCs += 1;
                    csAr.push(records[i].firstname);
                }
                if (records[i].field === 'SWE') {
                    stuSwe += 1;
                    sweAr.push(records[i].firstname);
                }
            }
            console.log(`Number of students in CS: ${stuCs}. List: ${csAr.join(', ')}`);
            console.log(`Number of students in SWE: ${stuSwe}. List: ${sweAr.join(', ')}`);
        });
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
