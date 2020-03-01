import React, { useContext } from "react";

import AppContext from "./../../context/appContext";
import ShoppingItem from "./../shopping-item/ShoppingItem";

export default props => {
  const context = useContext(AppContext);
  return (
    <div>
      {context.cart.map(item => (
        <ShoppingItem
          key={item.id}
          {...item}
          clicked={() => context.removeFromCart(item.id)}
        />
      ))}
      {context.cart.length === 0 ? (
        <div style={{ textAlign: "center" }}>You shopping cart is empty</div>
      ) : null}
    </div>
  );
};
