import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getUsers, loginUser } from '../../common/api/api';
import { LoginUser, User } from '../../common/types';

export interface UsersState {
  users: User[] | [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await getUsers();
    return response;
  } catch (error) {
    return error;
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.users = [];
        state.error = action.error.message;
      });
  }
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer;
