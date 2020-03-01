export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.itemId);
    default:
      return state;
  }
};

const addToCart = (state, item) => {
  const currentCart = state.cart.slice();
  const isPresent = currentCart.find(e => e.id === item.id);
  if (isPresent) {
    const index = currentCart.indexOf(isPresent);
    const newItem = { ...isPresent, count: isPresent.count + 1 };
    currentCart.splice(index, 1, newItem);
  } else {
    currentCart.push({ ...item, count: 1 });
  }
  return { ...state, cart: currentCart };
};

const removeFromCart = (state, itemId) => {
  const currentCart1 = state.cart.slice();
  const itemExists = currentCart1.find(e => e.id === itemId);
  if (itemExists) {
    const index = currentCart1.indexOf(itemExists);
    const newCount = itemExists.count - 1;
    if (newCount === 0) {
      currentCart1.splice(index, 1);
    } else {
      const newItem = { ...itemExists, count: newCount };
      currentCart1.splice(index, 1, newItem);
    }
    return { ...state, cart: currentCart1 };
  }
  return state;
};
