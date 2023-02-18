import { Button, CircularProgress } from '@mui/material';
import styles from './AnnouncementForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';
import FormButtons from '../../../../components/form/FormButtons';

export type FormData = {
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
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.formWrapper}>
        <FormInputText name="title" control={control} label="Title" multiline={false} />
        <FormInputText name="text" control={control} label="Text" multiline={true} numRows={8} />
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

export default AnnouncementForm;
