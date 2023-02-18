import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import styles from './FormInput.module.scss';

export interface FormInputImageProps {
  name: string;
  control: any;
}

const FormInputImage = ({ name, control }: FormInputImageProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
          <input id="btn-upload" name="btn-upload" type="file" value={value} onChange={onChange} />
        )}
      />
    </div>
  );
};

export default FormInputImage;
