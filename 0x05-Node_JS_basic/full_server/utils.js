// This mosule defines a readDatabase fucntion
import fs from 'fs';

const readDatabase = (path) => new Promise((res, rej) => {
  if (!path) {
    rej(new Error('Can not read database'));
  }
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      rej(new Error('Can not read database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      res(studentGroups);
    }
  });
});
export default readDatabase;
