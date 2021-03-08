import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { Row } from "react-bootstrap";

function ProductsContainer({ products, addToCart }) {
  return (
    <ProductsList title="Products That may interrest you">
      <Row style={{ margin: 10, padding: 25 }}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        ))}
      </Row>
    </ProductsList>
  );
}

//connect the component to the reducer and map the fonction
export const ProductsContainerStore = connect(
  (state) => ({
    products: state.ProductsReducer,
  }),
  { addToCart }
)(ProductsContainer);

export default ProductsContainerStore;
