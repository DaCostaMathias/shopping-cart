import React from "react";
import Product from "./Product";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function ProductItem({ product, onAddToCartClicked }) {
  return (
    <Col sx={12} md={6} style={{ paddingBottom: 10, marginBottom: 10 }}>
      <Product
        
        name={product.name}
        price={product.price}
      >
        <OverlayTrigger
          key={"top"}
          placement={"top"}
          overlay={<Tooltip id={`tooltip-top`}>Add to cart.</Tooltip>}
        >
          <Button variant="success" onClick={onAddToCartClicked}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </OverlayTrigger>
      </Product>
    </Col>
  );
}

export default ProductItem;
