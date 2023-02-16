import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAnnouncementById, selectSortedAnnouncements } from '../../announcementsSlice';
import FilterFields from '../../../filters/FilterFields';
import UsersList from '../../../users/components/UsersList';
import styles from './AnnouncementForm.module.scss';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../../app/store';

type FormData = {
  title: string;
  text: string;
};

interface AnnouncementFormProps {
  values: FormData;
  title: string;
  onSubmit: (data: FormData) => void;
}

const AnnouncementForm = ({ values, title, onSubmit }: AnnouncementFormProps) => {
  const methods = useForm<FormData>({ defaultValues: values });
  const { handleSubmit, reset, control } = methods;
  // const onSubmit = (data: FormData) => console.log(data);
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <FormInputText name="title" control={control} label="Title" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="text" control={control} label="Text" multiline={true} numRows={8} />
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
            Save
          </Button>
          <Button onClick={() => reset()} variant={'outlined'}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
