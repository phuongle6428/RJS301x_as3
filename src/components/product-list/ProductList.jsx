import React from 'react'
import Product from '../product/Product'
import './product-list.css'

export default function ProductList({ data }) {
   if(data.length < 1) {
      return <div>No Products</div>
   }
   return (
      <div className='product-list'>
         {data.map((value, index) => <Product data={value} key={index} />)}
      </div>
   )
}
