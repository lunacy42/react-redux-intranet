import { Button, CircularProgress } from '@mui/material';
import styles from './UserForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';

export type FormData = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  team: string;
  jobTitle: string;
  img: string;
  telephone: string;
  location: string;
  room: string;
  role: string;
};

interface UserFormProps {
  values: FormData;
  title: string;
  onSubmit: (data: FormData) => void;
  loading: boolean;
}

const UserForm = ({ values, title, onSubmit, loading }: UserFormProps) => {
  const methods = useForm<FormData>({ defaultValues: values });
  const { handleSubmit, reset, control } = methods;
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <FormInputText name="username" control={control} label="Username" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="email" control={control} label="Email" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="firstName" control={control} label="First Name" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="lastName" control={control} label="Last Name" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="department" control={control} label="Department" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="team" control={control} label="Team" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="jobTitle" control={control} label="Job Title" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="img" control={control} label="Image" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="telephone" control={control} label="Telephone" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="location" control={control} label="Location" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="room" control={control} label="Room" multiline={false} />
        </div>
        <div className={styles.inputWrapper}>
          <FormInputText name="role" control={control} label="Role" multiline={false} />
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

export default UserForm;
