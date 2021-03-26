declare const percentageType: unique symbol;

export default class Percentage extends Number {
  [percentageType]: void;
  readonly value: number;

  constructor(value: number){
    super(value);
    if (value < 0) {
      this.value = 0;
    } else if (value > 100) {
      this.value = 100;
    } else {
      this.value = value;
    }
  }

  toFixed(v: number): string {
    return this.value.toFixed(v);
  }

  valueOf() {
    return this.value;
  }
}

