import * as types from '../constants/ActionTypes'

/* export const addToCart = (productId) => ({

    // if (getState().productsReducer.byId[productId].inventory > 0) {
      type:types.ADD_ONE_ITEM_TO_CART,productId
    // }
  });
 */

  
const addToCartOffsetted = productId => ({
  type: types.ADD_ONE_ITEM_TO_CART,
  productId
})

export const addToCart = productId => (dispatch) => {

  const offsetId = productId-1;
  dispatch(addToCartOffsetted(offsetId))

}

export const RemoveFromCart = productId => {
  return{
    type: types.REMOVE_ITEM_TO_CART,
    productId
  };
};