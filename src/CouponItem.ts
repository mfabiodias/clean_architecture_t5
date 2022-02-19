export type CouponType = {
  id: number;
  code: string;
  type: 'percent' | 'rate';
  value: number;
  expireTime: number;
  expired?: boolean;
};

export default class CouponItem {
  private static couponList: Array<CouponType> = [
    {
      id: 1,
      code: 'VALE20',
      type: 'percent',
      value: 20,
      expireTime: 1903834800, // 2030-02-01 00:00:00
    },
    {
      id: 2,
      code: 'VALE20REAIS',
      type: 'rate',
      value: 20,
      expireTime: 1903834800, // 2030-02-01 00:00:00
    },
    {
      id: 3,
      code: 'VALE30REAIS2020',
      type: 'rate',
      value: 30,
      expireTime: 1580526000, // 2020-02-01 00:00:00
    },
  ];

  static getCoupon(code: string): CouponType | undefined {
    const coupon = CouponItem.couponList.find(
      e => e.code === code.toUpperCase()
    );
    if (coupon) coupon.expired = CouponItem.hasExpired(coupon);
    return coupon;
  }
  private static hasExpired(coupon: CouponType): boolean {
    return coupon.expireTime < Math.floor(new Date().getTime() / 1000);
  }
}
