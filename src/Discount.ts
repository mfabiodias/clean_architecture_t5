export default class Discount {
  constructor(readonly type: string, readonly value: number) {
    this.value = value < 0 ? 0 : value;
  }
}
