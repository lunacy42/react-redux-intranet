import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './FormInput.module.scss';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  dataTestid?: string;
}

const FormInputDateTime = ({ name, control, label, dataTestid = '' }: FormInputProps) => {
  return (
    <div className={styles.inputWrapper} data-testid={dataTestid}>
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
