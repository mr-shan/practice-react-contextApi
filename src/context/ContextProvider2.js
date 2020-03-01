import React, { useContext, useReducer } from "react";

import AppContext from "./appContext";
import { reducer, ADD_TO_CART, REMOVE_FROM_CART } from "./reducer";

const initialState = {
  shoppingList: [
    {
      id: 1,
      name: "Harry Potter",
      price: 1450
    },
    {
      id: 2,
      name: "Game of thrones",
      price: 1900
    },
    {
      id: 3,
      name: "Lord of the rings",
      price: 1150
    },
    {
      id: 4,
      name: "The witcher",
      price: 850
    }
  ],
  cart: []
};

export default props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = item => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };
  const removeFromCart = itemId => {
    dispatch({
      type: REMOVE_FROM_CART,
      itemId: itemId
    });
  };
  return (
    <AppContext.Provider
      value={{
        shoppingList: state.shoppingList,
        cart: state.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
