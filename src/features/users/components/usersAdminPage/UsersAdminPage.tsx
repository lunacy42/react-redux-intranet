import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useSelector } from 'react-redux';
import { deleteUser, selectUsers, selectUsersDeleteStatus } from '../../usersSlice';
import styles from './UsersAdminPage.module.scss';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';

const UsersAdminPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();
  const loading = useSelector(selectUsersDeleteStatus) === 'loading';
  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
  };
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>Administrate Users</h2>
        <Link className={styles.link} to="/users/create">
          <h3>New User</h3>
        </Link>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Team</TableCell>
                <TableCell align="left">Job Title</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Telephone</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Room</TableCell>
                <TableCell align="left">Role</TableCell>
                <TableCell align="left">Created at</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.department}</TableCell>
                  <TableCell align="left">{user.team}</TableCell>
                  <TableCell align="left">{user.jobTitle}</TableCell>
                  <TableCell align="left">{user.img}</TableCell>
                  <TableCell align="left">{user.telephone}</TableCell>
                  <TableCell align="left">{user.location}</TableCell>
                  <TableCell align="left">{user.room}</TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  <TableCell align="left">{user.created}</TableCell>
                  <TableCell align="left">
                    <div className={styles.iconRow}>
                      <Link to={`/users/edit/${user.username}`}>
                        <AiFillEdit />
                      </Link>
                      <MdOutlineDeleteOutline onClick={() => handleDelete(user.id)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UsersAdminPage;
