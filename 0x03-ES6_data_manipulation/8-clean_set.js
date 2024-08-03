export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const result = [];

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result.push(elem.slice(startString.length));
    }
  }

  return result.join('-');
}
