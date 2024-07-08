import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const ProductDetails = () => {
    const param = useParams()
  return (
    <div>
        {param.productId}
      
    </div>
  )
}

export default ProductDetails
