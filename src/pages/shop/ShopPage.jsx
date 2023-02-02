import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import ProductList from '../../components/product-list/ProductList';
import './shop.css';

const dataURL = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams();
  const cate = searchParams.get('category')
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(dataURL)
        if (!cate) {
          setProducts(data)
          return
        }
        const productsData = data.filter((value) => value.category === cate)
        setProducts(productsData)
      } catch (error) {
        alert('Server error')
      }
    }
    getData()
  }, [cate])
  return (
    <div className='container shop'>
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
            <div className='col-lg-6'>
              <h1 className='h2 text-uppercase mb-0'>Shop</h1>
            </div>
            <div className='col-lg-6 text-lg-right'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb justify-content-lg-end mb-0 px-0'>
                  <li
                    className='breadcrumb-item active'
                    aria-current='page'>
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <div className='container p-0'>
          <div className='row'>
            <div className='col-lg-3 order-2 order-lg-1'>
              <h5 className='text-uppercase mb-4'>Categories</h5>
              <div className='py-2 px-4 bg-dark text-white mb-3'>
                <strong className='small text-uppercase font-weight-bold'>
                  Apple
                </strong>
              </div>
              <ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                <li className='mb-2'>
                  <Link className={(cate === null ? 'active ' : '') + 'nav-link'} to={'/shop'}>All</Link>
                </li>
              </ul>
              <div className='py-2 px-4 bg-light mb-3'>
                <strong className='small text-uppercase font-weight-bold'>
                  Iphone & Mac
                </strong>
              </div>
              <ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                <li className='mb-2'>
                  <Link className={(cate === 'iphone' ? 'active ' : '') + 'nav-link'} to={'/shop?category=iphone'}>IPhone</Link>

                </li>
                <li className='mb-2'>
                  <Link className={(cate === 'ipad' ? 'active ' : '') + 'nav-link'} to={'/shop?category=ipad'}>Ipad</Link>

                </li>
                <li className='mb-2'>
                  <Link className={(cate === 'mac' ? 'active ' : '') + 'nav-link'} to={'/shop?category=mac'}>Macbook</Link>
                </li>
              </ul>
              <div className='py-2 px-4 bg-light mb-3'>
                <strong className='small text-uppercase font-weight-bold'>
                  Wireless
                </strong>
              </div>
              <ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
                <li className='mb-2'>
                  <Link className={(cate === 'airpod' ? 'active ' : '') + 'nav-link'} to={'/shop?category=airpod'}>Airpod</Link>

                </li>
                <li className='mb-2'>
                  <Link className={(cate === 'watch' ? 'active ' : '') + 'nav-link'} to={'/shop?category=watch'}>Watch</Link>

                </li>
              </ul>
              <div className='py-2 px-4 bg-light mb-3'>
                <strong className='small text-uppercase font-weight-bold'>
                  Other
                </strong>
              </div>
              <ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5'>
                <li className='mb-2'>
                  <Link className={(cate === 'mouse' ? 'active ' : '') + 'nav-link'} to={'/shop?category=mouse'}>Mouse</Link>

                </li>
                <li className='mb-2'>
                  <Link className={(cate === 'keyboard' ? 'active ' : '') + 'nav-link'} to={'/shop?category=keyboard'}>Keyboard</Link>

                </li>
                <li className='mb-2'>
                  <Link className={(cate === 'other' ? 'active ' : '') + 'nav-link'} to={'/shop?category=other'}>Other</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
              <div className='row mb-3 align-items-center'>
                <div className='col-lg-4'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Enter Search Here!'
                  />
                </div>
                <div className='col-lg-8'>
                  <ul className='list-inline d-flex align-items-center justify-content-lg-end mb-0'>
                    <li className='list-inline-item'>
                      <select className='selectpicker ml-auto'>
                        <option value='default'>Default sorting</option>
                        <option value='DownToUp'>Price: Low to High</option>
                        <option value='UpToDown'>Price: High to Low</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <ProductList data={products} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
