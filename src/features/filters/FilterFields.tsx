import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import AutocompleteButton from '../../components/AutocompleteButton';
import SearchField from '../../components/SearchField';
import { departmentFilterChanged, nameFilterChanged, selectNameFilter } from './filtersSlice';
import { selectUsers } from '../users/usersSlice';
import styles from './FilterFields.module.scss';

const FilterFields = () => {
  const searchNameValue = useSelector(selectNameFilter);
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();

  const getDepartments = () => {
    const departments = users.map((user) => user.department);
    console.log('departments', departments);
    const uniqueDepartments = [...new Set(departments)];

    return uniqueDepartments;
  };
  return (
    <div className={styles.filterSearchFields}>
      <AutocompleteButton
        options={getDepartments()}
        setOption={(value) => dispatch(departmentFilterChanged(value))}
        searchParameter="departments"
      />
      <SearchField
        value={searchNameValue}
        handleChange={(value) => dispatch(nameFilterChanged(value))}
        searchParameter="name"
      />
    </div>
  );
};

export default FilterFields;
