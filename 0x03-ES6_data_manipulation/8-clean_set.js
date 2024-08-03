export default function cleanSet(set, startString) {
  if (!startString || typeof (startString !== 'string')) {
    return '';
  }

  const result = [];

  for (const elem of set.values()) {
    if (typeof (elem) === 'string' && elem.startsWith(startString)) {
      result.push(elem.slice(startString.length));
    }
  }

  return result.join('-');
}
