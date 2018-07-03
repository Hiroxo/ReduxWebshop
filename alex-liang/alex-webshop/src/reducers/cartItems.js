import * as cartItemActionTypes from '../actiontypes/cartItems.js';

const initialState = [
];

export default function cartItems(state=initialState, action) {
  switch(action.type) {
    case cartItemActionTypes.ADDITEMTOCART:
      return [
        ...state,
        {

        }
      ];

    case cartItemActionTypes.REMOVEITEM:
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
