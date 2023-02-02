import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './list-cart.css'
import { useDispatch } from 'react-redux'
import { DELETE_CART, UPDATE_CART } from '../../redux/userSlice'

export default function ListCart({ data }) {
   const dispatch = useDispatch()
   const handleQuantity = (amount, _id) => {
      const productIndex = data.findIndex(value => value._id.$oid === _id)
      const newData = { ...data[productIndex] }
      if (newData.quantity < 2 && amount < 0) {
         return
      }
      newData.quantity += amount
      dispatch(UPDATE_CART(newData))
   }
   const handleDelete = (_id) => {
      const productIndex = data.findIndex(value => value._id.$oid === _id)
      dispatch(DELETE_CART(data[productIndex]))
   }
   return (
      <div className='list-cart'>
         <table className='table'>
            <thead className='bg-light'>
               <tr className='text-center'>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Image
                     </strong>
                  </th>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Product
                     </strong>
                  </th>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Price
                     </strong>
                  </th>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Quantity
                     </strong>
                  </th>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Total
                     </strong>
                  </th>
                  <th className='border-0' scope='col'>
                     <strong className='text-small text-uppercase'>
                        Remove
                     </strong>
                  </th>
               </tr>
            </thead>
            <tbody>
               {data &&
                  data.map((value, index) => (
                     <tr className='text-center' key={index}>
                        <td className='pl-0 border-0'>
                           <div className='align-items-center justify-content-center'>
                              <Link
                                 className='d-block'
                                 to={`/detail/${value._id.$oid}`}>
                                 <img src={value.img1} alt='...' width='70' />
                              </Link>
                           </div>
                        </td>
                        <td className='align-middle border-0'>
                           <div className='align-items-center justify-content-center'>
                              <Link
                                 className='h6 product-link'
                                 to={`/detail/${value._id.$oid}`}>
                                 {value.name}
                              </Link>
                           </div>
                        </td>

                        <td className='align-middle border-0'>
                           <p className='mb-0 small'>
                              {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(value.price)}
                           </p>
                        </td>
                        <td className='align-middle border-0'>
                           <div className='quantity justify-content-center'>
                              <FontAwesomeIcon icon={faCaretLeft} className='dec-btn p-0' onClick={() => handleQuantity(-1, value._id.$oid)} />
                              <input
                                 className='form-control form-control-sm border-0 shadow-0 p-0'
                                 type='text'
                                 value={value.quantity}
                                 disabled
                              />
                              <FontAwesomeIcon icon={faCaretRight} className='inc-btn p-0' onClick={() => handleQuantity(1, value._id.$oid)} />
                           </div>
                        </td>
                        <td className='align-middle border-0'>
                           <p className='mb-0 small'>
                              {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(value.price * value.quantity)}
                           </p>
                        </td>
                        <td className='align-middle border-0'>
                           <FontAwesomeIcon icon={faTrashAlt} color='black' onClick={() => handleDelete(value._id.$oid)} />
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   )
}
