import { Button, CircularProgress } from '@mui/material';
import styles from './UserForm.module.scss';
import FormInputText from '../../../../components/form/FormInputText';
import { useForm } from 'react-hook-form';
import FormButtons from '../../../../components/form/FormButtons';

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
        <FormInputText
          name="username"
          control={control}
          label="Username"
          multiline={false}
          dataTestid="user-username"
          required={true}
        />
        <FormInputText
          name="email"
          control={control}
          label="Email"
          multiline={false}
          dataTestid="user-email"
          required={true}
          type="email"
        />
        <FormInputText
          name="firstName"
          control={control}
          label="First Name"
          multiline={false}
          dataTestid="user-firstname"
          required={true}
        />
        <FormInputText
          name="lastName"
          control={control}
          label="Last Name"
          multiline={false}
          dataTestid="user-lastname"
          required={true}
        />
        <FormInputText
          name="department"
          control={control}
          label="Department"
          multiline={false}
          dataTestid="user-department"
          required={true}
        />
        <FormInputText
          name="team"
          control={control}
          label="Team"
          multiline={false}
          dataTestid="user-team"
          required={true}
        />
        <FormInputText
          name="jobTitle"
          control={control}
          label="Job Title"
          multiline={false}
          dataTestid="user-jobtitle"
          required={true}
        />
        <input accept="image/*" type="file" className={styles.imgInput} />
        <FormInputText
          name="telephone"
          control={control}
          label="Telephone"
          multiline={false}
          dataTestid="user-telephone"
          required={true}
        />
        <FormInputText
          name="location"
          control={control}
          label="Location"
          multiline={false}
          dataTestid="user-location"
          required={true}
        />
        <FormInputText
          name="room"
          control={control}
          label="Room"
          multiline={false}
          dataTestid="user-room"
          required={true}
        />
        <FormInputText
          name="role"
          control={control}
          label="Role"
          multiline={false}
          dataTestid="user-role"
          required={true}
        />
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

export default UserForm;
