import { combineReducers, configureStore } from '@reduxjs/toolkit'
import popupSlice from './popupSlice'
import userlistSlice from './userlistSlice'
import userSlice from './userSlice'

const reducer = combineReducers({
   user: userSlice.reducer,
   userArr: userlistSlice.reducer,
   popup: popupSlice.reducer
})

export default configureStore({reducer})