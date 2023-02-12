import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { User } from '../../common/types';
import AutocompleteButton from '../../components/AutocompleteButton';
import SearchField from '../../components/SearchField';
import {
  departmentFilterChanged,
  nameFilterChanged,
  selectDepartmentFilter,
  selectNameFilter
} from '../../features/filters/filtersSlice';
import {
  fetchUsers,
  selectUsers,
  selectUsersStatus,
  selectFilteredUsers
} from '../../features/users/usersSlice';
import styles from './Staff.module.css';

const Staff = () => {
  const searchNameValue = useSelector(selectNameFilter);
  const selectedDepartment = useSelector(selectDepartmentFilter);
  const users = useSelector(selectUsers);
  const usersStatus = useSelector(selectUsersStatus);
  const filteredUsers = useSelector(selectFilteredUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [usersStatus, users, dispatch]);

  const getDepartments = () => {
    const departments = users.map((user) => user.department);
    console.log('departments', departments);
    const uniqueDepartments = [...new Set(departments)];

    return uniqueDepartments;
  };
  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="title">
          <h2>Staff</h2>
        </div>
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
      </div>
      <div className={styles.grid}>
        {usersStatus === 'succeeded' && filteredUsers?.length === 0 && <p>No Staff found.</p>}
        {filteredUsers?.map((user: User) => {
          return (
            <div key={user.id} className={styles.card}>
              <img
                width={250}
                height={250}
                src={user.img}
                alt={user.firstName}
                className={styles.img}
              />
              <Link className={styles.link} to={`/staff/${user.firstName}`}></Link>
              <div>
                <p className={styles.staffName}>{user.firstName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
