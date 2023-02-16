import { useSelector } from 'react-redux';
import { Announcement } from '../../../common/types';
import styles from './AnnouncementsList.module.scss';
import { useRef } from 'react';
import HorizontalScrollBox from '../../../components/HorizontalScrollBox/HorizontalScrollBox';
import {
  selectAnnouncements,
  selectAnnouncementsStatus,
  selectSortedAnnouncements
} from '../announcementsSlice';

const AnnouncementsList = () => {
  const announcementsStatus = useSelector(selectAnnouncementsStatus);
  const announcements = useSelector(selectSortedAnnouncements);
  return (
    <div>
      {announcementsStatus === 'succeeded' && announcements?.length === 0 && (
        <p>No Announcements found.</p>
      )}
      {announcements?.map((announcement: Announcement) => {
        return (
          <div key={announcement.id} className={styles.announcementBox}>
            <h4 className={styles.title}>{announcement.title}</h4>
            <p className={styles.date}>{announcement.created}</p>
            <p className={styles.text}>{announcement.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnnouncementsList;
