import { DimensionType } from './Item';

export default class OrderItem {
  constructor(
    readonly idItem: number,
    readonly price: number,
    readonly quantity: number,
    readonly weight: number,
    readonly dimension: DimensionType
  ) {}

  getTotal() {
    return this.price * this.quantity;
  }
}
