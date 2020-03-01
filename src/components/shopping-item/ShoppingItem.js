import React from "react";

import styles from "./ShoppingItem.module.css";

export default props => {
  return (
    <div className={styles.shoppingItemContainer} onClick={props.clicked}>
      <label>{props.name}</label>
      <label>{props.price}</label>
      {props.count ? <label>x {props.count}</label> : null}
    </div>
  );
};
