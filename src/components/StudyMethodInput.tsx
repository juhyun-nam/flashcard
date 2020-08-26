import React, { Dispatch } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import StudyMethod from '../StudyMethod';

type StudyMethodInputProp = {
  method: StudyMethod,
  setMethod: Dispatch<StudyMethod>
};

export default function StudyMethodInput({ method, setMethod }: StudyMethodInputProp) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMethod = StudyMethod[(event.target.value as keyof typeof StudyMethod)];
    setMethod(newMethod);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Study Type</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={StudyMethod[method]} onChange={handleChange}>
        <FormControlLabel value={StudyMethod[StudyMethod.SHUFFLE]} control={<Radio />} label="Shuffle" />
        <FormControlLabel value={StudyMethod[StudyMethod.RANDOM]} control={<Radio />} label="Random" />
      </RadioGroup>
    </FormControl>
  );
}
