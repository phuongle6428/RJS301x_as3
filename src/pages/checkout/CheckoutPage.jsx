import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './checkout.css'

export default function CheckoutPage() {
  const { cart } = useSelector(state => state.user)
  const totalCart = () => {
    let total = 0
    cart.forEach((element, index) => {
      total += element.price * element.quantity
    });
    return new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(total)
  }
  return (
    <div className='checkout container'>
      <section className='py-5 bg-light'>
        <div className='container'>
          <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
            <div className='col-lg-6'>
              <h1 className='h2 text-uppercase mb-0'>Checkout</h1>
            </div>
            <div className='col-lg-6 text-lg-right'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb justify-content-lg-end mb-0 px-0'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item'>
                    <Link to='/cart'>Cart</Link>
                  </li>
                  <li
                    className='breadcrumb-item active'
                    aria-current='page'>
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <h2 className='h5 text-uppercase mb-4'>Billing details</h2>
        <div className='row'>
          <div className='col-lg-8'>
            <form>
              <div className='row'>
                <div className='col-lg-12 form-group'>
                  <label
                    className='text-small text-uppercase'
                    htmlFor='Fullname'>
                    Full Name:
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Enter Your Full Name Here!'
                  />
                </div>
                <div className='col-lg-12 form-group'>
                  <label
                    className='text-small text-uppercase'
                    htmlFor='Email'>
                    Email:
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Enter Your Email Here!'
                  />
                </div>
                <div className='col-lg-12 form-group'>
                  <label
                    className='text-small text-uppercase'
                    htmlFor='Phone'>
                    Phone Number:
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Enter Your Phone Number Here!'
                  />
                </div>
                <div className='col-lg-12 form-group'>
                  <label
                    className='text-small text-uppercase'
                    htmlFor='Address'>
                    Address:
                  </label>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Enter Your Address Here!'
                  />
                </div>
                <div className='col-lg-12 form-group'>
                  <button className='form-btn'>Place order</button>
                </div>
              </div>
            </form>
          </div>
          <div className='col-lg-4'>
            <div className='card border-0 rounded-0 p-lg-4 bg-light'>
              <div className='card-body'>
                <h5 className='text-uppercase mb-4'>
                  Your order
                </h5>
                <ul className='list-unstyled mb-0'>
                  {cart?.length > 0 &&
                    cart.map((value) => (
                      <div key={value._id.$oid}>
                        <li className='d-flex align-items-center justify-content-between'>
                          <strong className='small font-weight-bold'>
                            {value.name}
                          </strong>
                          <br></br>
                          <span className='text-muted small'>
                            {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(value.price)}
                            x{value.quantity}
                          </span>
                        </li>
                        <li className='border-bottom my-2'></li>
                      </div>
                    ))}
                  <li className='d-flex align-items-center justify-content-between'>
                    <strong className='text-uppercase small font-weight-bold'>
                      Total
                    </strong>
                    <span>{totalCart()} VND</span>
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
