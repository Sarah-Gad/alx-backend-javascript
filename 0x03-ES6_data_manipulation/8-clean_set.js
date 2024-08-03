export default function cleanSet(set, startString) {
  const array = [...set];
  let restr = '';
  let flag = false;
  if (startString.length !== 0) {
    for (const elem of array) {
      if (elem.startsWith(startString)) {
        if (flag) {
          restr += '-';
        }
        restr += elem.slice((startString.length), elem.length);
        flag = true;
      }
    }
  }
  return restr;
}
