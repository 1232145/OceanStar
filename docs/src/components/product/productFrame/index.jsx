import React from 'react'
import ListProducts from '../productList'
import './index.css'

function ProductFrame({ borderMode, filterMode}) {
  return (
    <div className='product-frame'>
      <div className='list-product'>
        <ListProducts borderMode={borderMode}/>
      </div>
      <div className='list-display'>
        <ListProducts displayItemMode={true}/>
      </div>
    </div>
  )
}

export default ProductFrame