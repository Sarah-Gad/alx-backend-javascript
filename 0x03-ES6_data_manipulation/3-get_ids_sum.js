export default function getStudentIdsSum(array) {
  const result = array.reduce((prev, next) => prev + next.id, 0);
  return result;
}
