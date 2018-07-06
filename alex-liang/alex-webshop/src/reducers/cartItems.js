import * as cartItemActionTypes from '../actiontypes/cartItems.js';

const initialState = {
  cartItems:[],
  stock:[]
}


export default function cartItems(state=initialState, action) {
  switch(action.type) {
    case cartItemActionTypes.ADDITEMTOCART:
      console.log(state)

      let item = Object.assign({}, action.item.item, {quantity:action.quantity} )
      const addItemList = [...state.cartItems, item ];
      return {
        ...state,
        cartItems:addItemList
      };

    case cartItemActionTypes.REMOVEITEM:
      const removeItemList = [
        ...state.cartItems.slice(0,action.index),
        ...state.cartItems.slice(action.index + 1)
      ];
      return {
        ...state,
        cartItems:removeItemList
      }

    case cartItemActionTypes.CLEARCART:
      return{
        ...state,
        cartItems:[]
      };
    default:
      return state;
  }
}
