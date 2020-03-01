import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppContext from "./../../context/appContext";
import styles from "./Navbar.module.css";

export default props => {
  const context = useContext(AppContext);
  const cartCount = context.cart.reduce(
    (acc, currentValue) => currentValue.count + acc,
    0
  );
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/shopping-list">Shopping List</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/shopping-cart">Shopping Cart ({cartCount})</NavLink>
        </li>
      </ul>
    </nav>
  );
};
