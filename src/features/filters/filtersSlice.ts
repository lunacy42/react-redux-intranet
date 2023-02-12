import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface FiltersState {
  department: string | null;
  name: string;
}

const initialState: FiltersState = {
  department: '',
  name: ''
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    departmentFilterChanged: (state, action: PayloadAction<string | null>) => {
      state.department = action.payload;
    },
    nameFilterChanged: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { departmentFilterChanged, nameFilterChanged } = filtersSlice.actions;

export const selectDepartmentFilter = (state: RootState) => state.filters.department;
export const selectNameFilter = (state: RootState) => state.filters.name;

export default filtersSlice.reducer;
