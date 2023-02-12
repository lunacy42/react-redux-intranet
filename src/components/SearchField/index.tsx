import * as React from 'react';
import TextField from '@mui/material/TextField';

interface SearchFieldProps {
  value: string;
  handleChange: (value: string) => void;
  searchParameter: string;
}

const SearchField = ({ value, handleChange, searchParameter }: SearchFieldProps) => {
  return (
    <TextField
      id="outlined-basic"
      label={`Search by ${searchParameter}`}
      variant="outlined"
      size="small"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
    />
  );
};

export default SearchField;
