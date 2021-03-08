import React from 'react'
import Product from './Product'
import { useDispatch } from 'react-redux'

import { RemoveFromCart } from '../actions'

function Cart ({ products, total }) {
  //create a dispatcher to send signal to redux
  const dispatch = useDispatch();
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product =>
         

         <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          key={product.id} >
            <button key={'bt'+product.id}
            //click is handle by the reducer 
              onClick={() => dispatch(RemoveFromCart(product.id)) }>
              {'X'}
            </button>
          </Product>

      )
    ) : (
      <em>Please add some products to cart.</em>
    )
    return (
        <div>
          <h3>Your Cart</h3>
          <div>{nodes}       
          </div>
          <p>Total: &#36;{total}</p>
        </div>
      )
}
export default Cart