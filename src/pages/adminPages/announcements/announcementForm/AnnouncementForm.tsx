import { Button, CircularProgress } from '@mui/material';
import styles from './AnnouncementForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  text: string;
};

interface AnnouncementFormProps {
  values: FormData;
  title: string;
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

const AnnouncementForm = ({ values, title, onSubmit, loading = false }: AnnouncementFormProps) => {
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
          <div className={styles.saveButtonWrapper}>
            <Button onClick={handleSubmit(onSubmit)} variant={'contained'} disabled={loading}>
              Save
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: 'blue',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px'
                }}
              />
            )}
          </div>
          <Button onClick={() => reset()} variant={'outlined'}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
