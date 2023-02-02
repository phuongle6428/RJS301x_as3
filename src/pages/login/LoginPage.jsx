import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import useInput from '../../hook/useInput';
import { checkAccout, login } from '../../redux/userSlice';
import './login.css'

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@') && (value.trim() !== '');

export default function LoginPage() {
  const [ErrorMess, setErrorMess] = useState()
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('react-as3-currentuser'))
    if (!user?.user) {
      return
    }
    dispatch(checkAccout(user))
  }, [])
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const submitHandler = (e) => {
    let isValid = true
    if (!emailIsValid) {
      isValid = false
      resetEmail();
    }
    if (!passwordIsValid) {
      isValid = false
      resetPassword();
    }
    if (!isValid) {
      setErrorMess('Form Invalid')
      return
    }
    const userList = JSON.parse(localStorage.getItem('react-as3-userlist'))
    const userIndex = userList?.findIndex((myUser) => {
      return email == myUser.email && password == myUser.password
    })
    if(typeof userIndex === 'number' && userIndex < 0) {
      resetEmail();
      resetPassword();
      setErrorMess('Invalid Email or Password')
      return
    }
    dispatch(login({user: userList[userIndex], cart: []}))
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <h4 className='login__title'>Sign In</h4>
        <div className='login__form'>
          <div className='login__input-container'>
            <input
              className='login__input'
              type='text'
              placeholder='Email'
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">Email is not valid.</p>}
          </div>
          <div className='login__input-container'>
            <input
              className='login__input'
              type='password'
              placeholder='Password'
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && <p className="error-text">Password is not valid.</p>}
          </div>
          {ErrorMess ? <p className='error-text'>{ErrorMess}</p> : null}
          <div className='login__btn-container'>
            {user?.email ? <Navigate to={`/`} /> : null}
            <button className='login__btn' onClick={submitHandler}>
              Sign in
            </button>
          </div>
        </div>
        <div className='login__another'>
          <span className='action-title'>Create an account?</span>
          &nbsp;
          <Link to='/register' className='login_sign'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
