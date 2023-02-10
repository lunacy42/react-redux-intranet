import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { loginUser } from '../../common/api/api';
import { LoginUser, User } from '../../common/types';

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null
};

export const login = createAsyncThunk('auth/login', async (user: LoginUser, thunkAPI) => {
  try {
    const response = await loginUser(user.email, user.password);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  }
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
