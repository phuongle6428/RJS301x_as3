import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavDropdown } from 'react-bootstrap'

export default function Name({ user }) {
   return (
      <li className='nav-item dropdown'>
         <NavDropdown
            id="nav-dropdown-dark-example"
            title={
               <>
                  <FontAwesomeIcon icon={faUserAlt} />
                  {user.email}
               </>
            }
         >
            <NavDropdown.Item href='/history' >
               History
            </NavDropdown.Item >
         </NavDropdown>
      </li>
   )
}
