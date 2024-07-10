import React from 'react'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const ProductDetails = () => {
    const param = useParams()
    const location = useLocation()


  return (
    <div>
        {param.productId}
        {location.state.data}
      
    </div>
  )
}

export default ProductDetails
