import { Button, CircularProgress } from '@mui/material';
import styles from './EventForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';
import FormInputDateTime from '../../../../components/form/FormInputDateTime';
import FormButtons from '../../../../components/form/FormButtons';

export type FormData = {
  title: string;
  text: string;
  date: string;
  img: string;
};

interface EventFormProps {
  values: FormData;
  title: string;
  onSubmit: (data: FormData) => void;
  loading: boolean;
}

const EventForm = ({ values, title, onSubmit, loading }: EventFormProps) => {
  const methods = useForm<FormData>({ defaultValues: values });
  const { handleSubmit, reset, control } = methods;
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.formWrapper}>
        <FormInputText
          name="title"
          control={control}
          label="Title"
          multiline={false}
          dataTestid="event-title"
          required={true}
        />
        <FormInputText
          name="text"
          control={control}
          label="Text"
          multiline={true}
          numRows={8}
          dataTestid="event-text"
          required={true}
        />
        <FormInputDateTime name="date" control={control} label="Date" dataTestid="event-date" />
        <input accept="image/*" type="file" />
        <FormButtons
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          reset={reset}
          submitButtonTitle="Save"
        />
      </div>
    </div>
  );
};

export default EventForm;
