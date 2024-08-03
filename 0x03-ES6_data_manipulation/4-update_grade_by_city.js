export default function updateStudentGradeByCity(array, city, newGrades) {
  const arrayBcity = array.filter((oneob) => oneob.location === city);
  const updatedarr = arrayBcity.map((one) => {
    const updatedone = { ...one };
    for (const newg of newGrades) {
      if (updatedone.id === newg.studentId) {
        updatedone.grade = newg.grade;
      }
    }
    if (!('grade' in updatedone)) {
      updatedone.grade = 'N/A';
    }
    return updatedone;
  });
  return updatedarr;
}
