import { applyCoupon, showCoupons } from "./coupon.js";

export const addEventListener = async () => {
  document.querySelector('.btn-appl-coupon').addEventListener('click', async () => {
    await applyCoupon();
  });
  document.querySelector('.btn-show-coupons').addEventListener('click', async () => {
    await showCoupons();
  });
}