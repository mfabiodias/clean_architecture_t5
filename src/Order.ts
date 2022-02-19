// @ts-nocheck
import Cpf from './Cpf';
import Item, { ItemType } from './Item';
import OrderItem from './OrderItem';
import Discount from './Discount';
import Coupon from './Coupon';
import Shipping from './Shipping';

export default class Order {
  cpf: Cpf;
  orderItems: Array<OrderItem>;
  discount: Discount | undefined;
  coupon: Coupon | undefined;
  shipping: number | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem({ item }: Item, quantity: number) {
    this.orderItems.push(
      new OrderItem(
        item.idItem,
        item.price,
        quantity,
        item.weight,
        item.dimension
      )
    );
  }

  getTotal(): number {
    let total = this.orderItems.reduce(
      (total, ordemItem) => (total += ordemItem.getTotal()),
      0
    );
    const couponData = this.coupon?.data;
    if (couponData && !couponData?.expired) {
      total -= this.coupon.getDiscount(total);
    }
    console.log('this.shipping', this.shipping);
    if (this.shipping) total += this.shipping;
    return total;
    // return this.applyDiscount(total);
  }

  addDistance(distance: number): void {
    this.shipping = this.orderItems.reduce((acc, cur) => {
      const { height, width, length } = cur.dimension;
      const shipping = new Shipping(
        height * cur.quantity,
        width,
        length,
        cur.weight * cur.quantity,
        distance
      );
      acc += shipping.getPrice();
      return acc;
    }, 0);
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  // applyDiscount(total: number): number {
  //   if (!this.discount) return total;
  //   total -=
  //     this.discount.type == 'percent'
  //       ? total * this.discount.value
  //       : this.discount.value;
  //   return total;
  // }

  // setDiscount(type: string, value: number): void {
  //   this.discount = new Discount(type, value);
  // }
}
