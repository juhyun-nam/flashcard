import React, { Dispatch } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckBox from '@material-ui/core/Checkbox';

type TestSourceInputProp = {
  testSource: any,
  setTestSource: Dispatch<any>;
};

export default function TestSourceInput({ testSource, setTestSource }: TestSourceInputProp) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTestSource({ ...testSource, [event.target.name]: event.target.checked });
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Test Source</FormLabel>
      <FormControlLabel control={<CheckBox checked={testSource.pattern} onChange={handleChange} />} label="Patterns" />
    </FormControl>
  );
}
