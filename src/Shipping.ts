export default class Shipping {
  private cubage: number;
  private density: number;
  private MIN_PRICE = 10;
  constructor(
    readonly height: number,
    readonly width: number,
    readonly length: number,
    readonly weight: number,
    readonly distance: number
  ) {
    this.cubage = this.getCubage();
    this.density = this.getDensity();
  }

  getPrice(): number {
    let price = this.distance * 1000 * this.cubage * (this.density / 100);
    if (price < this.MIN_PRICE) return this.MIN_PRICE;
    return price;
  }

  private getCubage(): number {
    return (this.height / 100) * (this.width / 100) * (this.length / 100);
  }

  private getDensity(): number {
    return Math.floor(this.weight / this.cubage);
  }
}
