import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCurrentUser, selectUsersUpdateStatus, updateUser } from '../usersSlice';
import FormInputText from '../../../components/form/FormInputText';
import { Button, CircularProgress } from '@mui/material';
import styles from './MyPageForm.module.scss';
import { useNavigate } from 'react-router-dom';

type FormData = {
  availability: string;
  notice: string;
};

const MyPageForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const loading = useAppSelector(selectUsersUpdateStatus) === 'loading';
  const navigate = useNavigate();

  if (!user) {
    return null;
  }
  const methods = useForm<FormData>({
    defaultValues: {
      availability: user.availability,
      notice: user.notice
    }
  });
  const { handleSubmit, reset, control } = methods;

  const onSubmit = (data: FormData) => {
    dispatch(
      updateUser({
        ...user,
        availability: data.availability,
        notice: data.notice,
        noticeDate: new Date().toString()
      })
    ).then(() => {
      navigate(-1);
    });
  };
  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <FormInputText
          name="availability"
          control={control}
          label="Availability"
          multiline={true}
          numRows={4}
        />
      </div>
      <div className={styles.inputWrapper}>
        <FormInputText
          name="notice"
          control={control}
          label="Notice"
          multiline={true}
          numRows={4}
        />
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
  );
};

export default MyPageForm;
