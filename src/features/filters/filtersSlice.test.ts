import filtersReducer, {
  FiltersState,
  departmentFilterChanged,
  nameFilterChanged
} from './filtersSlice';

describe('filters reducer', () => {
  const initialState: FiltersState = {
    department: '',
    name: ''
  };
  it('should handle initial state', () => {
    expect(filtersReducer(undefined, { type: 'unknown' })).toEqual({
      department: '',
      name: ''
    });
  });

  it('should handle departmentFilterChanged', () => {
    expect(filtersReducer(initialState, departmentFilterChanged('IT'))).toEqual({
      department: 'IT',
      name: ''
    });
  });

  it('should handle nameFilterChanged', () => {
    expect(filtersReducer(initialState, nameFilterChanged('se'))).toEqual({
      department: '',
      name: 'se'
    });
  });
});
