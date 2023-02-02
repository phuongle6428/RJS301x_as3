import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'

export default function Banner() {
   return (
      <section className='banner container'>
         <div className='banner-content'>
            <h5 className='title'>
               New Inspiration 2020
            </h5>
            <p className='main-content'>
               20% off on new season
            </p>
            <Link to={'/shop'} className='banner-btn'>
               Browse collections
            </Link>
         </div>
      </section>
   )
}
