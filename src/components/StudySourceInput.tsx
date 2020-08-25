import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckBox from '@material-ui/core/Checkbox';

import { Actions } from '../actions';
import { AppState }  from '../reducer';

export default function StudySourceInput() {
  const dispatch = useDispatch();
  const currentSource = useSelector((state: AppState) => state.source);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(Actions.sourceAction({ ...currentSource, [event.target.name]: event.target.checked }));
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Study Source</FormLabel>
      <FormControlLabel control={<CheckBox checked={currentSource.pattern} onChange={handleChange} />} label="Patterns" />
    </FormControl>
  );
}
