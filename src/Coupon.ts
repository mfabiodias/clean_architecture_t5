// @ts-nocheck
import CouponItem, { CouponType } from './CouponItem';
export default class Coupon {
  data: CouponType | undefined;
  constructor(readonly code: string) {
    this.data = CouponItem.getCoupon(code);
  }
  getDiscount(total: number): number {
    // if (!this.data) return 0;
    return this.data.type === 'percent'
      ? (total * this.data.value) / 100
      : this.data.value;
  }
}
