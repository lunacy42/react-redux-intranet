import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AutocompleteButtonProps {
  options: string[];
  setOption: (value: string | null) => void;
  searchParameter: string;
}

const AutocompleteButton = ({ options, setOption, searchParameter }: AutocompleteButtonProps) => {
  return (
    <Autocomplete
      disablePortal
      id="autocomplete"
      data-testid="autocomplete"
      options={options}
      sx={{ width: 300 }}
      size="small"
      onChange={(event, value) => setOption(value)}
      renderInput={(params) => <TextField {...params} label={`Filter by ${searchParameter}`} />}
    />
  );
};

export default AutocompleteButton;
