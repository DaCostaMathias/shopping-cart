import React from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import { RemoveFromCart } from "../actions";

function Cart({ products, total }) {
  //create a dispatcher to send signal to redux
  const dispatch = useDispatch();
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <Col xs={12} md={12}  style={{ paddingBottom: 10, marginBottom: 10 }}>
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        >
          <OverlayTrigger
            key={"top"}
            placement={"top"}
            overlay={<Tooltip id={`tooltip-top`}>Remove {product.name} from  cart.</Tooltip>}
          >
            <Button
              key={"bt" + product.id}
              variant="danger"
              //click is handle by the reducer
              onClick={() => dispatch(RemoveFromCart(product.id))}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </OverlayTrigger>
        </Product>
      </Col>
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );
  return (
    <div>
      <h3>Your Cart</h3>
      <Row>{nodes}
        <Col md={{offset : 4}} xs={{offset :6}}>Total: &#36;{total}</Col>
      </Row>
    </div>
  );
}
export default Cart;
