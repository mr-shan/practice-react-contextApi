import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppContext from "./../../context/appContext";
import styles from "./Navbar.module.css";

export default props => {
  const context = useContext(AppContext);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/shopping-list">Shopping List</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/shopping-cart">
            Shopping Cart ({context.cart.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
