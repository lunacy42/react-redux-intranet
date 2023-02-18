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
  dataTestid?: string;
  type?: string;
}

const FormInputText = ({
  name,
  control,
  label,
  multiline,
  numRows = 1,
  required = false,
  dataTestid = '',
  type = 'text'
}: FormInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
          pattern:
            type === 'email'
              ? // eslint-disable-next-line no-useless-escape
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              : /^/
        }}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => {
          const getHelperText = () => {
            if (error) {
              if (error.type === 'required') {
                return 'This field is required';
              }
              if (error.type === 'pattern') {
                return 'Valid email required';
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
              data-testid={dataTestid}
              type={type}
            />
          );
        }}
      />
    </div>
  );
};

export default FormInputText;
