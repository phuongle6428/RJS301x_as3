import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollyFlatbed, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Name from '../name/Name'
import './navbar.css'
import { logout } from '../../redux/userSlice'

export default function NavBar({ isLogin }) {
   const { user } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(logout())
   }
   return (
      <div className='container px-0 px-lg-3 navbar-component'>
         <nav className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'>
            <button
               className='navbar-toggler'
               type='button'
               data-toggle='collapse'
               data-target='#navbarNavAltMarkup'
               aria-controls='navbarNavAltMarkup'
               aria-expanded='false'
               aria-label='Toggle navigation'>
               <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
               <ul className='navbar-nav mr-auto'>
                  <li
                     className='nav-item'
                  >
                     <NavLink
                        className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                        to={`/`}
                     >
                        Home
                     </NavLink>
                  </li>
                  <li
                     className='nav-item'
                  >
                     <NavLink
                        className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                        to={`/shop`}
                     >
                        Shop
                     </NavLink>
                  </li>
               </ul>
               <Link className='navbar-brand' to={`/`}>
                  <span className='font-weight-bold text-uppercase text-dark'>
                     Boutique
                  </span>
               </Link>
               <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                     <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to={`/cart`}>
                        <FontAwesomeIcon icon={faDollyFlatbed} />
                        Cart
                     </NavLink>
                  </li>
                  {user !== '' ? <Name user={user}/> : ''}
                  {isLogin ?
                     <li className='nav-item' onClick={handleLogout}>
                        <Link className='nav-link' to={`/login`}>
                           (Logout)
                        </Link>
                     </li> :
                     <li className='nav-item'>
                        <Link className='nav-link' to={`/login`}>
                           <FontAwesomeIcon icon={faUserAlt} />
                           Login
                        </Link>
                     </li>
                  }
               </ul>
            </div>
         </nav>
      </div>
   )
}
