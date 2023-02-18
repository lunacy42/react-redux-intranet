import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import styles from './FormInput.module.scss';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  multiline: boolean;
  numRows?: number;
  required?: boolean;
}

const FormInputText = ({
  name,
  control,
  label,
  multiline,
  numRows = 1,
  required = false
}: FormInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required
        }}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => {
          const getHelperText = () => {
            if (error) {
              if (error.type === 'required') {
                return 'This field is required';
              }
              return error.message;
            }
            return null;
          };
          return (
            <TextField
              helperText={getHelperText()}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={label}
              variant="outlined"
              multiline={multiline}
              rows={numRows}
            />
          );
        }}
      />
    </div>
  );
};

export default FormInputText;
