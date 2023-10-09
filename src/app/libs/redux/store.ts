import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './features/login/loginSlice'
import { userAccountSlice } from './features/userAccount/userAccountSlice'


export const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [userAccountSlice.name]: userAccountSlice.reducer,


  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch