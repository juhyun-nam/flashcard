import React, { Dispatch } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { StudyMethod } from '../StudyMethod';

type StudyMethodInputProp = {
  studyMethod: StudyMethod,
  setStudyMethod: Dispatch<StudyMethod>
};

export default function StudyMethodInput({ studyMethod, setStudyMethod }: StudyMethodInputProp) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudyMethod(StudyMethod[(event.target.value as keyof typeof StudyMethod)]);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Test Type</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={StudyMethod[studyMethod]} onChange={handleChange}>
        <FormControlLabel value={StudyMethod[StudyMethod.SHUFFLE]} control={<Radio />} label="Shuffle" />
        <FormControlLabel value={StudyMethod[StudyMethod.RANDOM]} control={<Radio />} label="Random" />
      </RadioGroup>
    </FormControl>
  );
}
