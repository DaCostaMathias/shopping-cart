import React from "react";

import { Col } from "react-bootstrap";

function ProductsList({ title, children }) {
  return (
    <Col>
      <h3>{title}</h3>
      <div>{children}</div>
    </Col>
  );
}

export default ProductsList;
