import React from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'
import TrendingProducts from '../../components/trending-products/TrendingProducts'

export default function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <TrendingProducts />
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-lg-4 mb-3 mb-lg-0'>
              <div className='d-inline-block'>
                <div className='media align-items-end'>
                  <div className='media-body text-left ml-3'>
                    <h6 className='text-uppercase mb-1'>
                      Free shipping
                    </h6>
                    <p className='text-small mb-0 text-muted'>
                      Free shipping worlwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3 mb-lg-0'>
              <div className='d-inline-block'>
                <div className='media align-items-end'>
                  <div className='media-body text-left ml-3'>
                    <h6 className='text-uppercase mb-1'>
                      24 x 7 service
                    </h6>
                    <p className='text-small mb-0 text-muted'>
                      Free shipping worlwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-inline-block'>
                <div className='media align-items-end'>
                  <div className='media-body text-left ml-3'>
                    <h6 className='text-uppercase mb-1'>
                      Festival offer
                    </h6>
                    <p className='text-small mb-0 text-muted'>
                      Free shipping worlwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <div className='container p-0'>
          <div className='row'>
            <div className='col-lg-6 mb-3 mb-lg-0'>
              <h5 className='text-uppercase'>Let's be friends!</h5>
            </div>
            <div className='col-lg-6'>
              <form action='#'>
                <div className='input-group flex-column flex-sm-row mb-3'>
                  <input
                    className='form-control form-control-lg py-3'
                    type='email'
                    placeholder='Enter your email address'
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-dark btn-block'
                    id='button-addon2'
                    type='submit'>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
