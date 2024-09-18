// This module reads from a file
const { parse } = require('csv-parse');
function countStudents(path) {
    const fs = require('fs')
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('Cannot load the database');
        }
        parse(data, { columns: true, trim: true }, (err, records) => {
            if (err) {
                throw new Error('Error parsing CSV data');
            }
            total_st = records.length
            console.log(`Number of students: ${total_st}`)
            let stu_cs = 0;
            let stu_swe = 0;
            let cs_ar = [];
            let swe_ar = [];
            for (let i = 0; i < total_st; i++) {
                if (records[i][field] == "CS") {
                    stu_cs ++;
                    cs_ar.push(records[i][firstname])
                }
                if (records[i][field] == "SWE") {
                    stu_swe ++;
                    swe_ar.push(records[i][firstname])
                }
            }
            console.log(`Number of students in FIELD: ${stu_cs} List: ${cs_ar}`)
            console.log(`Number of students in FIELD: ${stu_swe} List: ${swe_ar}`)

        })

    })
}
module.exports = countStudents;
