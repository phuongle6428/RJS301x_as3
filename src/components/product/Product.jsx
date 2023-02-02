import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

export default function Product({ data, clickDisable }) {
   const handleClick = (e) => {
      if(clickDisable) {
         e.preventDefault()
      }
   }
   return (
      <div className='product-component'>
         <Link to={`/detail/${data._id.$oid}`} className='img-container' onClick={handleClick}>
            <img src={data.img1} alt={data.name} className='img' />
         </Link>
         <div className='product-info'>
            <Link to={`/detail/${data._id.$oid}`} className='title' onClick={handleClick}>{data.name}</Link>
            <p className='price'>
               {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(data.price)}
            </p>
         </div>
      </div>
   )
}
