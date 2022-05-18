import styles from "./cart.module.css";
import React from "react";
import { useTypedDispatch, useTypedSelecter } from "@/hooks/store";
import {
  checkoutCart,
  getTotalPrice,
  removeFromCart,
  updateQuantity,
} from "@/pages/cart/cart.slice";
import classNames from "classnames";

function CartComponent() {
  const dispatch = useTypedDispatch();
  const products = useTypedSelecter((state) => state.products.products);
  const items = useTypedSelecter((state) => state.cart.items);
  const checkoutState = useTypedSelecter((state) => state.cart.checkoutState);
  const errorMessage = useTypedSelecter((state) => state.cart.errorMessage);
  const totalPrice = useTypedSelecter(getTotalPrice);

  const classname = classNames({
    container: true,
    [styles.loading]: checkoutState === "LOADING",
    [styles.error]: checkoutState === "ERROR",
  });

  const onQuantityChanged = (
    e: React.FocusEvent<HTMLInputElement>,
    id: string
  ) => {
    const quantity = Number(e.target.value) || 1;
    dispatch(updateQuantity({ id, quantity }));
    e.target.value = String(quantity);
  };

  const onCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkoutCart(items));
  };

  return (
    <div className={classname}>
      <h1 className="title has-text-centered mt-6">购物车</h1>
      <table className="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>商品</th>
            <th>数量</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  defaultValue={quantity}
                  className={`input is-small ${styles.inp}`}
                  onBlur={(e) => onQuantityChanged(e, id)}
                />
              </td>
              <td>¥{products[id].price}</td>
              <td>
                <button
                  onClick={() => dispatch(removeFromCart(id))}
                  className="button is-danger is-small"
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>总价</td>
            <td></td>
            <td>¥{totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      {checkoutState === "ERROR" && errorMessage ? (
        <p className="has-text-danger">{errorMessage}</p>
      ) : null}
      <form onSubmit={onCheckout}>
        <button className="button is-primary">支付</button>
      </form>
    </div>
  );
}

export default CartComponent;
