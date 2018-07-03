import * as cartItemActionTypes from '../actiontypes/cartItems.js';

export const addItemToCart = item => {
  return {
    type:cartItemActionTypes.ADDITEMTOCART,
    item
  };
}

export const removeItem = index => {
  return {
    type:cartItemActionTypes.REMOVEITEM,
    index
  };
}
