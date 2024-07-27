import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(value) {
    if (typeof (value) !== 'number') {
      throw new Error('Not a number');
    }
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
