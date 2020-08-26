import React, { Dispatch } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckBox from '@material-ui/core/Checkbox';

type Source = {
  label: string,
  checked: boolean,
};
type StudySourceInputProp = {
  sources: Array<Source>,
  setSources: Dispatch<Array<Source>>
};

export default function StudySourceInput({ sources, setSources }: StudySourceInputProp) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSources = sources.map((elem) => ({
      ...elem, checked: (elem.label === event.target.name ? event.target.checked : elem.checked),
    }));
    setSources(newSources);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Study Source</FormLabel>
      {
        sources.map((elem) => (
          <FormControlLabel
            key={elem.label}
            label={elem.label}
            control={<CheckBox checked={elem.checked} onChange={handleChange} name={elem.label} />}
          />
        ))
      }
    </FormControl>
  );
}
