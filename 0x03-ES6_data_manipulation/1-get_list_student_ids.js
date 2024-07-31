export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const newarr = array.map((oneobj) => oneobj.id);
    return newarr;
  }
  return [];
}
