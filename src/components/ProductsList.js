import React from 'react'

function ProductsList ({ title, children }) {
    return(
        <div>
          <h3>{title}</h3>
          <div>{children}</div>
        </div>
      )
} 

export default ProductsList
