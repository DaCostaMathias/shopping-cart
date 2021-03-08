import { combineReducers } from "redux";
import ProductsReducer, * as fromProducts from "./products";
import cartReducer, * as fromCart from "./cart";

export default combineReducers({
  cartReducer,
  ProductsReducer,
});

const getAddedIds = (state) => fromCart.getAddedIds(state.cartReducer);
const getQuantity = (state, id) => fromCart.getQuantity(state.cartReducer, id);
const getProduct = (state, id) =>
  fromProducts.getProduct(state.ProductsReducer, id);

export const getTotal = (state) =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getCartProducts = (state) =>
  getAddedIds(state).map((id) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
