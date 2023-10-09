import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import userAccountInterface from '@/interfaces/userAccount.interface'

const initialState: userAccountInterface = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}


export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    setUserAccount: (state, action: PayloadAction<userAccountInterface>) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.phone = action.payload.phone
    }
  },
})

export const { setUserAccount } = userAccountSlice.actions

export const selectUserAccount = (state: RootState) => state.userAccount

export default userAccountSlice.reducer