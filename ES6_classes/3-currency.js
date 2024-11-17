export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(valueCode) {
    this._code = valueCode;
  }

  get name() {
    return this._name;
  }

  set name(valueName) {
    this._name = valueName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
