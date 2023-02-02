import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hook/useInput';
import { register } from '../../redux/userlistSlice';
import './register.css'

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

export default function RegisterPage() {
  const [ErrorMess, setErrorMess] = useState()
  const userlist = useSelector((state) => state.userArr)
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  const {
    value: fullname,
    isValid: fullnameIsValid,
    hasError: fullnameHasError,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullname,
  } = useInput(isNotEmpty);
  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
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
    if (!fullnameIsValid) {
      isValid = false
      resetFullname();
    }
    if (!phoneIsValid) {
      isValid = false
      resetPhone();
    }
    if (!isValid) {
      setErrorMess('Form Invalid')
      return
    }

    const userList = JSON.parse(localStorage.getItem('react-as3-userlist'))
    const userIndex = userList?.findIndex((user) => {
      return email === user.email && password === user.password
    })
    if (typeof userIndex === 'number' && userIndex < 0) {
      resetEmail();
      resetPassword();
      setErrorMess('Already have account with that email')
      return
    }
    dispatch(register({ email, fullname, password, phone }))
    navigate('/login')
  }
  return (
    <div className='register'>
      <div className='register__container'>
        <h4 className='register__title'>Sign Up</h4>
        <div className='register__form'>
          <div className='register__input-container'>
            <input
              className='register__input'
              type='text'
              placeholder='Full Name'
              value={fullname}
              onChange={fullnameChangeHandler}
              onBlur={fullnameBlurHandler}
            />
            {fullnameHasError && <p className="error-text">Full name is emptied.</p>}
          </div>
          <div className='register__input-container'>
            <input
              className='register__input'
              type='text'
              placeholder='Email'
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">Email is not valid.</p>}
          </div>
          <div className='register__input-container'>
            <input
              className='register__input'
              type='password'
              placeholder='Password'
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && <p className="error-text">Password is not valid.</p>}
          </div>
          <div className='register__input-container'>
            <input
              className='register__input'
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneHasError && <p className="error-text">Phone is not valid.</p>}
          </div>
          {ErrorMess ? <p className="error-text">{ErrorMess}</p> : null}
          <div className='register__btn-container'>
            <button className='register__btn' onClick={submitHandler}>
              Sign Up
            </button>
          </div>
        </div>
        <div className='register__another'>
          <span className='action-title'>Login?</span>
          &nbsp;
          <Link to='/login' className='register_sign'>
            Click
          </Link>
        </div>
      </div>
    </div>
  )
}
