import React from 'react'
import ListProducts from '../productList'
import './index.css'

function ProductFrame({ borderMode, filterMode, pathTo}) {
  return (
    <div className='product-frame'>
      <div className='list-product'>
        <ListProducts borderMode={borderMode} pathTo={pathTo}/>
      </div>
      <div className='list-display'>
        <ListProducts displayItemMode={true} pathTo={pathTo}/>
      </div>
    </div>
  )
}

export default ProductFrame