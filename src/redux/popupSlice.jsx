import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    data: '',
    isShow: false
  },
  reducers: {
   SHOW_POPUP: (state, action) => {
      state.data = action.payload
      state.isShow = true
   },
   HIDE_POPUP: (state, action) => {
      state.data = ''
      state.isShow = false
   }
  }
})

export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions

export default popupSlice