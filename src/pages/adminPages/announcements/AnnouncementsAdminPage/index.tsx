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
import {
  selectAnnouncementsDeleteStatus,
  selectSortedAnnouncements
} from '../../../../features/announcements/announcementsSlice';
import styles from './index.module.scss';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AnnouncementsAdminPage = () => {
  const announcements = useSelector(selectSortedAnnouncements);
  const deleteStatus = useSelector(selectAnnouncementsDeleteStatus);
  const loading = useSelector(selectAnnouncementsDeleteStatus) === 'loading';
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>Administrate Announcements</h2>
        <Link className={styles.link} to="/announcements/create">
          <h3>New Announcement</h3>
        </Link>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="left">Text</TableCell>
                <TableCell align="left">Created at</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {announcements.map((announcement) => (
                <TableRow
                  key={announcement.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {announcement.title}
                  </TableCell>
                  <TableCell align="left">{announcement.text}</TableCell>
                  <TableCell align="left">{announcement.created}</TableCell>
                  <TableCell align="left">
                    <div className={styles.iconRow}>
                      <Link to={`/announcements/edit/${announcement.id}`}>
                        <AiFillEdit />
                      </Link>
                      <MdOutlineDeleteOutline />
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

export default AnnouncementsAdminPage;
