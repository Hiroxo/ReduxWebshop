import * as quantityActionTypes from '../actiontypes/quantity.js';
import products from '../products.json'

let initialQuant={};
  products.map((item) =>
    initialQuant[item.name] = 0
  );
const initialState = initialQuant
;

export default function quantity(state=initialState, action) {
  switch(action.type) {
    case quantityActionTypes.CHANGEQUANT:

      return Object.assign({}, state, [action.item.name['quantity']]:quant)

    default:
      return state;
  }
}
