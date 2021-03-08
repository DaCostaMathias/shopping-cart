import React from 'react'
// import PropTypes from 'prop-types'
import Product from './Product'

function ProductItem ({ product, onAddToCartClicked }) {
    return (
     <div style={{ marginBottom: 20 }}>
       <Product
         name={product.name}
         price={product.price}
          />
       <button
         onClick={onAddToCartClicked}>
         {'Add to cart'}
       </button>
     </div>
   )
}


export default ProductItem
