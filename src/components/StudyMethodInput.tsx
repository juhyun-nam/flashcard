import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Actions } from '../actions';
import { AppState }  from '../reducer';
import { StudyMethod } from '../StudyMethod';

export default function StudyMethodInput() {
  const dispatch = useDispatch();
  const currentMethod = useSelector((state: AppState) => state.method);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const method = StudyMethod[(event.target.value as keyof typeof StudyMethod)];
    dispatch(Actions.methodAction(method));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Test Type</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={StudyMethod[currentMethod]} onChange={handleChange}>
        <FormControlLabel value={StudyMethod[StudyMethod.SHUFFLE]} control={<Radio />} label="Shuffle" />
        <FormControlLabel value={StudyMethod[StudyMethod.RANDOM]} control={<Radio />} label="Random" />
      </RadioGroup>
    </FormControl>
  );
}
