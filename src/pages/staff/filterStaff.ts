import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { User } from '../../common/types';
import AutocompleteButton from '../../components/AutocompleteButton';
import SearchField from '../../components/SearchField';
import { fetchUsers, selectUsers, selectUsersStatus } from '../../features/users/usersSlice';
import styles from './Staff.module.css';

export const filterStaff = (
  users: User[],
  selectedDepartment: string | null,
  searchNameValue: string
) => {
  const filteredUsers = users.filter((user) => {
    const hasDepartment = selectedDepartment ? user.department === selectedDepartment : true;
    if (searchNameValue.length > 0) {
      const hasName =
        user.firstName.toLowerCase().includes(searchNameValue) ||
        user.lastName.toLowerCase().includes(searchNameValue) ||
        user.username.includes(searchNameValue);
      return hasDepartment && hasName;
    }
    return hasDepartment;
  });
  return filteredUsers;
};
