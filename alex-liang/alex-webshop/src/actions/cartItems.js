import * as cartItemActionTypes from '../actiontypes/cartItems.js';

export const addItemToCart = (item,quantity ) => {
  return {
    type:cartItemActionTypes.ADDITEMTOCART,
    item,
    quantity
  };
}

export const removeItem = index => {
  return {
    type:cartItemActionTypes.REMOVEITEM,
    index
  };
}

export const clearCart = () => {
  return {
    type:cartItemActionTypes.CLEARCART
  }
}
