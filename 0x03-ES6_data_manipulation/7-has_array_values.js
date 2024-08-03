export default function hasValuesFromArray(set, array) {
  let flag = 0;
  for (const elem of array) {
    if (set.has(elem)) {
      flag = 0;
    } else {
      flag = 1;
    }
  }
  if (flag === 1) {
    return false;
  }
  return true;
}
