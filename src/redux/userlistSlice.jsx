import { createSlice } from '@reduxjs/toolkit'

const userList = JSON.parse(localStorage.getItem('react-as3-userlist'))

const userlistSlice = createSlice({
  name: 'userlist',
  initialState: {
    userlist: userList?.length > 0 ? userList : [],
  },
  reducers: {
   register: (state, action) => {
      state.userlist.push({...action.payload})
      localStorage.setItem('react-as3-userlist', JSON.stringify(state.userlist))
      console.log('i register')
   }
  }
})

export const { register } = userlistSlice.actions

export default userlistSlice