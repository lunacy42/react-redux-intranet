import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { loginUser } from '../../common/api/api';
import { LoginUser } from '../../common/types';

export interface AuthState {
  userId: string | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: AuthState = {
  userId: null,
  isAuthenticated: false,
  status: 'idle',
  error: null
};

export const login = createAsyncThunk('auth/login', async (user: LoginUser, thunkAPI) => {
  try {
    const response = await loginUser(user.email, user.password);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.userId = action.payload.id;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.userId = null;
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  }
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
