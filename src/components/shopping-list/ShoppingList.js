import React, { useContext } from "react";

import AppContext from "./../../context/appContext";
import ShoppingItem from "./../shopping-item/ShoppingItem";

export default props => {
  const context = useContext(AppContext);
  return (
    <div>
      {context.shoppingList.map(item => (
        <ShoppingItem
          key={item.id}
          buttonText="Add to cart"
          {...item}
          clicked={() => context.addToCart(item)}
        />
      ))}
    </div>
  );
};
