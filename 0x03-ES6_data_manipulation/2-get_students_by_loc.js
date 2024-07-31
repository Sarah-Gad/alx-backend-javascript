export default function getStudentsByLocation(array, city) {
  const newarr = array.filter((onobj) => onobj.location === city);
  return newarr;
}
