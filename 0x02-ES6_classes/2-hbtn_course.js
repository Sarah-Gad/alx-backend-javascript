export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('not a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('not a number');
    }
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((element) => typeof element === 'string')) {
      throw new TypeError('Not an array of strings');
    }
    this._students = value;
  }

  get students() {
    return this._students;
  }
}
