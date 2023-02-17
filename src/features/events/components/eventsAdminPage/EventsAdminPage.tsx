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
import { selectUpcomingEvents } from '../../eventsSlice';
import styles from './EventsAdminPage.module.scss';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EventsAdminPage = () => {
  const events = useSelector(selectUpcomingEvents);
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>Administrate Events</h2>
        <Link className={styles.link} to="/events/create">
          <h3>New Event</h3>
        </Link>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="left">Text</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Created at</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {event.title}
                  </TableCell>
                  <TableCell align="left">{event.text}</TableCell>
                  <TableCell align="left">{event.date}</TableCell>
                  <TableCell align="left">{event.img}</TableCell>
                  <TableCell align="left">{event.created}</TableCell>
                  <TableCell align="left">
                    <div className={styles.iconRow}>
                      <Link to={`/events/edit/${event.id}`}>
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

export default EventsAdminPage;
