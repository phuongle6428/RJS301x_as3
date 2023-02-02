import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SHOW_POPUP } from '../../redux/popupSlice'
import PopUp from '../popup/Popup'
import Product from '../product/Product'
import './trending-products.css'
const dataURL = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
export default function TrendingProducts() {
   const [products, setProducts] = useState([])
   const dispatch = useDispatch()
   useEffect(() => {
      async function getData() {
         try {
            const { data } = await axios.get(dataURL)

            setProducts(data.filter((value, index) => index < 8))
         } catch (error) {
            alert('Server error')
         }
      }
      getData()
   }, [])
   let displayView = ''
   if (products.length > 0) {
      displayView = products.map((value, index) => {
         return (
            <div key={index} className='product-item' onClick={() => dispatch(SHOW_POPUP(value))}>
               <Product data={value} clickDisable={true} />
            </div>
         )
      })
   }
   return (
      <div className='trending-products container'>
         <h4 className='title'>
            <span className='sologan'>MADE THE HARD-WAY</span>
            <br />
            <span className='cat'>TOP TRENDING PRODUCTS</span>
         </h4>
         <div className='products'>{displayView}</div>
         <PopUp />
      </div>
   )
}
