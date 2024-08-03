export default function updateStudentGradeByCity(array, city, newGrades) {
  const arrayBcity = array.filter((oneob) => oneob.location === city)
  const updatedarr = arrayBcity.map((one) => {
    for (const newg of newGrades) {
      if (one.id === newg.studentId) {
        one.grade = newg.grade
      }
    }
    if (!('grade' in one)) {
      one.grade = "N/A"
    }
    return one
  })
  return updatedarr
}
