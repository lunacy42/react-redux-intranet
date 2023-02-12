import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getUsers, loginUser } from '../../common/api/api';
import { Filters, LoginUser, User } from '../../common/types';
import { FiltersState } from '../filters/filtersSlice';

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

export const selectFilteredUsers = createSelector(
  selectUsers,
  (state: RootState) => state.filters,
  (users: User[], filters: FiltersState) => {
    const { department, name } = filters;

    const filteredUsers = users.filter((user: User) => {
      const hasDepartment = department ? user.department === department : true;
      if (name.length > 0) {
        const hasName =
          user.firstName.toLowerCase().includes(name.toLowerCase()) ||
          user.lastName.toLowerCase().includes(name.toLowerCase()) ||
          user.username.includes(name.toLowerCase());
        return hasDepartment && hasName;
      }
      return hasDepartment;
    });
    return filteredUsers;
  }
);

export default usersSlice.reducer;
