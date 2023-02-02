import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'

export default function Category() {
   return (
      <section className='category container'>
         <header className='header text-center'>
            <p className='small text-muted small text-uppercase mb-1'>
               Carefully created collections
            </p>
            <h2 className='h5 text-uppercase'>
               Browse our categories
            </h2>
         </header>
         <div className='row category-shop'>
            <div className='col-md-12 mb-4'>
               <div className='row'>
                  <div className='col-md-6 mb-4 mb-md-0'>
                     <Link className='category-item' to={'/shop?category=iphone'}>
                        <img
                           className='img-fluid'
                           src={'/product_1.png'}
                           alt=''
                        />
                     </Link>
                  </div>
                  <div className='col-md-6 mb-4 mb-md-0'>
                     <Link className='category-item' to={'/shop?category=mac'}>
                        <img
                           className='img-fluid'
                           src={'/product_2.png'}
                           alt=''
                        />
                     </Link>
                  </div>
               </div>
            </div>

            <div className='col-md-12'>
               <div className='row'>
                  <div className='col-md-4 mb-4 mb-md-0'>
                     <Link className='category-item' to={'/shop?category=ipad'}>
                        <img
                           className='img-fluid'
                           src={'/product_3.png'}
                           alt=''
                        />
                     </Link>
                  </div>
                  <div className='col-md-4 mb-4 mb-md-0'>
                     <Link className='category-item' to={'/shop?category=watch'}>
                        <img
                           className='img-fluid'
                           src={'/product_4.png'}
                           alt=''
                        />
                     </Link>
                  </div>
                  <div className='col-md-4 mb-4 mb-md-0'>
                     <Link className='category-item' to={'/shop?category=airpod'}>
                        <img
                           className='img-fluid'
                           src={'/product_5.png'}
                           alt=''
                        />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
