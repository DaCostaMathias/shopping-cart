import React from 'react'

function Product ({ price, name, quantity, children }) {

    return (
    <div>
        {name} - &#36;{price}{quantity ? ` x ${quantity}` : null}
        {children}
    </div>
    )
}
export default Product
