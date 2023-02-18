import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './FormInput.module.scss';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
}

const FormInputDateTime = ({ name, control, label }: FormInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePicker
            disableMaskedInput
            label={label}
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} variant="outlined" size="small" />}
          />
        )}
      />
    </div>
  );
};

export default FormInputDateTime;
