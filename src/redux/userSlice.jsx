import { createSlice } from '@reduxjs/toolkit'

// const user = JSON.parse(localStorage.getItem('react-as3-currentuser'))

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    cart: []
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.cart = action.payload.cart
      localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
    },
    logout: (state, action) => {
      state.user = ''
      localStorage.setItem('react-as3-currentuser', JSON.stringify({user: '', cart: []}))
    },
    checkAccout: (state, action) => {
      state.user = action.payload.user
      state.cart = action.payload.cart
    },
    ADD_CART: (state, action) => {
      if(state.cart.length < 1) {
        state.cart.push(action.payload)
        localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
        return
      }
      const isCart = state.cart.findIndex(value => value._id.$oid === action.payload._id.$oid)
      if(isCart < 0) {
        state.cart.push(action.payload)
        localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
        return
      }
      state.cart[isCart].quantity = action.payload.quantity
      localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
    },
    UPDATE_CART: (state, action) => {
      const isCart = state.cart.findIndex(value => {
        return value._id.$oid === action.payload._id.$oid
      })
      if(isCart < 0) {
        console.log('UPDATE_CART ERROR')
        return
      }
      state.cart[isCart].quantity = action.payload.quantity
      localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
    },
    DELETE_CART: (state, action) => {
      const isCart = state.cart.findIndex(value => value._id.$oid === action.payload._id.$oid)
      if(isCart < 0) {
        console.log('DELETE_CART ERROR')
        return
      }
      state.cart.splice(isCart, 1)
      localStorage.setItem('react-as3-currentuser', JSON.stringify(state))
    }
  }
})

export const { login, logout, checkAccout, ADD_CART, UPDATE_CART, DELETE_CART } = userSlice.actions

export default userSlice