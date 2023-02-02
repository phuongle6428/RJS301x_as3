import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ListCart from '../../components/list-cart/ListCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

export default function CartPage() {
  const { cart } = useSelector(state => state.user)
  const totalCart = () => {
    let total = 0
    cart.forEach((element, index) => {
      total += element.price * element.quantity
    });
    return new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(total)
  }
  return (
    <div className='container cart-page'>
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
            <div className='col-lg-6'>
              <h1 className='h2 text-uppercase mb-0'>Cart</h1>
            </div>
            <div className='col-lg-6 text-lg-right'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb justify-content-lg-end mb-0 px-0'>
                  <li
                    className='breadcrumb-item active'
                    aria-current='page'>
                    CART
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <h2 className='h5 text-uppercase mb-4'>Shopping cart</h2>
        <div className='row'>
          <div className='col-lg-8 mb-4 mb-lg-0'>
            <ListCart
              data={cart}
            />

            <div className='bg-light px-4 py-3'>
              <div className='d-flex align-items-center justify-content-between text-center'>
                <div className='text-md-left '>
                  <Link
                    className='btn btn-link p-0 text-dark btn-sm d-flex align-items-center'
                    to={`/shop`}
                  >
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    <span className='ms-2'>Continue shopping</span>
                  </Link>
                </div>
                <div className='text-md-right '>
                  <Link
                    className='btn btn-outline-dark btn-sm d-flex align-items-center'
                    to={'/checkout'}
                  >
                    <span className='me-2'>Proceed to checkout</span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card border-0 rounded-0 p-lg-4 bg-light'>
              <div className='card-body'>
                <h5 className='text-uppercase mb-4'>Cart total</h5>
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-center justify-content-between'>
                    <strong className='text-uppercase small font-weight-bold'>
                      Subtotal
                    </strong>
                    <span className='text-muted small'>
                      {totalCart()}
                    </span>
                  </li>
                  <li className='border-bottom my-2'></li>
                  <li className='d-flex align-items-center justify-content-between mb-4'>
                    <strong className='text-uppercase small font-weight-bold'>
                      Total
                    </strong>
                    <span>{totalCart()}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
