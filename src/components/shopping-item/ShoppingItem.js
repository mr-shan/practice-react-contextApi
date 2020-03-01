import React from "react";

import styles from "./ShoppingItem.module.css";

export default props => {
  const buttonText = props.count ? `Qty: ${props.count}` : props.buttonText;
  return (
    <div className={styles.shoppingItemContainer}>
      <label>
        {props.name} - ₹ {props.price}
      </label>
      <button onClick={props.clicked}>{buttonText}</button>
    </div>
  );
};
