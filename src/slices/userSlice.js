import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;