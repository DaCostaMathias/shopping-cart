import * as types from "../constants/ActionTypes";

const addToCartOffsetted = (productId) => ({
  type: types.ADD_ONE_ITEM_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch) => {
  const offsetId = productId - 1;
  dispatch(addToCartOffsetted(offsetId));
};

export const RemoveFromCart = (productId) => {
  return {
    type: types.REMOVE_ITEM_TO_CART,
    productId,
  };
};
