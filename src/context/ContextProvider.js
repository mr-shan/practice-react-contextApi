import React from "react";

import AppContext from "./appContext";

class AppContextProvide extends React.Component {
  state = {
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

  addToCart = item => {
    const currentCart = this.state.cart.slice();
    const isPresent = currentCart.find(e => e.id === item.id);
    if (isPresent) {
      const index = currentCart.indexOf(isPresent);
      const newItem = { ...isPresent, count: isPresent.count + 1 };
      currentCart.splice(index, 1, newItem);
    } else {
      currentCart.push({ ...item, count: 1 });
    }
    this.setState({ cart: currentCart });
  };

  removeFromCart = itemId => {
    const currentCart = this.state.cart.slice();
    const isPresent = currentCart.find(e => e.id === itemId);
    if (isPresent) {
      const index = currentCart.indexOf(isPresent);
      const newCount = isPresent.count - 1;
      if (newCount === 0) {
        currentCart.splice(index, 1);
      } else {
        const newItem = { ...isPresent, count: newCount };
        currentCart.splice(index, 1, newItem);
      }
      this.setState({ cart: currentCart });
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          shoppingList: this.state.shoppingList,
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvide;