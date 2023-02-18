import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Button, CircularProgress, TextField } from '@mui/material';
import styles from './FormInput.module.scss';

export interface FormButtonsProps {
  handleSubmit: any;
  onSubmit: any;
  loading: boolean;
  reset: () => void;
  submitButtonTitle: string;
}

const FormButtons = ({
  handleSubmit,
  onSubmit,
  loading,
  reset,
  submitButtonTitle
}: FormButtonsProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.saveButtonWrapper}>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant={'contained'}
          disabled={loading}
          data-testid="submit">
          {submitButtonTitle}
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
  );
};

export default FormButtons;
