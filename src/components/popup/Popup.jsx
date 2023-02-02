import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_POPUP } from '../../redux/popupSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './popup.css'
import { Link } from 'react-router-dom'
export default function Popup() {
   const dispatch = useDispatch()
   const {isShow, data} = useSelector(state => state.popup)
   if(!data) {
      return
   }
   return (
      <Modal show={isShow} onHide={() => dispatch(HIDE_POPUP())} className='popup' size='xl' centered>
         <div className='img-container'>
            <img src={data.img1} alt={data.name} />
         </div>
         <div className='content'>
            <h4 className='title'>{data.name}</h4>
            <p className='price'>
               {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(data.price)}
            </p>
            <p className='desc'>{data.short_desc}</p>
            <Link className='btn' to={`/detail/${data._id.$oid}`} onClick={() => dispatch(HIDE_POPUP())}>
               <FontAwesomeIcon icon={faCartShopping} color='white' /> View Detail
            </Link>
         </div>
      </Modal>
   )
}
