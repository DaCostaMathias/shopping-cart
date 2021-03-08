import React from 'react'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total  }) => (
  <Cart
    products={products}
    total={total}
    />
)

//connect the components to redux to get access to the state
export default connect(
    (state) => ({
        products: getCartProducts(state),
        total: getTotal(state)
    })
)(CartContainer)
