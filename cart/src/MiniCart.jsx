import React, { useState, useEffect } from "react";
import { cart, clearCart } from "./cart";
import { currency } from "home/planets";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart">
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart">
          {items.length}
        </i>
      </span>
      {showCart && (
        <div
          className="absolute  p-5 border-4 border-blue-800 w-full"
          style={{ width: 300 }}
        >
          <div
            className="grid gap-3 text-sm"
            style={{ griTemplateColumns: "1fr 3fr 10fr 2fr" }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div>{item.quantity}</div>
                <img src={item.image} alt={item.name} />
                <div className="text-right">
                  {currency.format(item.quantity * item.price)}
                </div>
              </React.Fragment>
            ))}
            <div></div>
            <div></div>
            <div></div>
            <div>
              {currency.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
