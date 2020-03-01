import React from "react";

import styles from "./ShoppingItem.module.css";

export default props => {
  return (
    <div className={styles.shoppingItemContainer} onClick={props.clicked}>
      <label style={{width: "70%"}}>{props.name}</label>
      <label style={{width: "15%"}}>{props.price}</label>
      {props.count ? <label  style={{width: "15%"}}>x {props.count}</label> : null}
    </div>
  );
};
