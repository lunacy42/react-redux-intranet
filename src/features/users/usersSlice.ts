import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getUsers, mutateUser } from '../../common/api/api';
import { User } from '../../common/types';
import { AuthState } from '../auth/authSlice';
import { FiltersState } from '../filters/filtersSlice';

export interface UsersState {
  users: User[];
  currentUserId: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: UsersState = {
  users: [],
  currentUserId: null,
  status: 'idle',
  updateStatus: 'idle',
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

export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
  try {
    const response = await mutateUser(user);
    return response;
  } catch (error) {
    return error;
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUserId: (state, action: PayloadAction<string | null>) => {
      state.currentUserId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.users = [];
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.updateStatus = 'succeeded';
        const users = state.users;
        const newUsers = users.map((user: User) =>
          user.id === action.payload.id ? action.payload : user
        );
        state.users = newUsers;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.users = [];
        state.error = action.error.message;
      });
  }
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUserByUsername = (state: RootState, username: string) =>
  state.users.users.find((user: User) => user.username === username);

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

export const selectCurrentUser = createSelector(
  selectUsers,
  (state: RootState) => state.auth,
  (users: User[], auth: AuthState) => {
    const { userId } = auth;

    const currentUser = users.find((user: User) => user.id === userId) || null;
    return currentUser;
  }
);

export const { setCurrentUserId } = usersSlice.actions;

export default usersSlice.reducer;
