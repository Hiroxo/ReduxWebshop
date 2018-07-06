import * as quantityActionTypes from '../actiontypes/quantity.js'

export const changeQuant = (item,quant) => {
  return {
    type:quantityActionTypes.CHANGEQUANT,
    item,
    quant
  };
}
