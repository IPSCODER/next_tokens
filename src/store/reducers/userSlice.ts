import { getLogin } from '@/api/services/auth.services';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | undefined;
  password: string | undefined;
}

const initialState: UserState = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers:(builder) =>{
    builder.addCase(getLogin.fulfilled,(state,action) =>{
      state.email = action?.payload?.email;
      state.password = action?.payload?.password;
    })
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
