import { Button } from '@mui/material';
import styles from './EventForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';
import FormInputDateTime from '../../../../components/form/FormInputDateTime';
import FormInputImage from '../../../../components/form/FormInputImage';

export type FormData = {
  title: string;
  text: string;
  date: string;
  image: string;
};

interface EventFormProps {
  values: FormData;
  title: string;
  onSubmit: (data: FormData) => void;
}

const EventForm = ({ values, title, onSubmit }: EventFormProps) => {
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
        <div className={styles.inputWrapper}>
          <FormInputDateTime name="date" control={control} label="Date" />
        </div>
        <div className={styles.inputWrapper}>
          <input accept="image/*" type="file" />
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

export default EventForm;
