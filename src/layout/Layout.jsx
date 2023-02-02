import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'
import { checkAccout } from '../redux/userSlice'

export default function Layout() {
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem('react-as3-currentuser'))
    if (!user?.user) {
      return
    }
    dispatch(checkAccout(user))
  }

  return (
    <div>
      <NavBar isLogin={user ? true : false} />
      <Outlet />
    </div>
  )
}
