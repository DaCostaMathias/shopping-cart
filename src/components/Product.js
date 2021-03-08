import React from "react";
import { Row, Col } from "react-bootstrap";

function Product({ price, name, quantity, children }) {
  return (
    <Row>
      <Col md={4} xs={6}>
        {name}
      </Col>
      <Col md={3} xs={4}>
        &#36;{price}
        {quantity ? ` x ${quantity}` : null}
      </Col>
      <Col xs={2}>{children}</Col>
    </Row>
  );
}
export default Product;
