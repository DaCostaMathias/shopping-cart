import {
  ADD_ONE_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
} from "../constants/ActionTypes";

const cart = {
  addedIds: [],
  quantityById: [],
};

const addedIds = (state = cart.addedIds, action) => {
  switch (action.type) {
    case ADD_ONE_ITEM_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_ITEM_TO_CART:
      return state.filter((productId) => productId !== action.productId - 1);

    default:
      return state;
  }
};

const quantityById = (state = cart.quantityById, action) => {
  let { productId } = action;
  let newStates = state;
  switch (action.type) {
    case ADD_ONE_ITEM_TO_CART:
      if (newStates[productId] !== undefined) {
        newStates[productId]++;
      } else {
        newStates[productId] = 1;
      }
      return newStates;
    case REMOVE_ITEM_TO_CART:
      productId--;
      newStates[productId] = 0;
      console.log({ newStates });
      return newStates;

    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

function cartReducer(state = cart, action) {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
}
export default cartReducer;
