import React, { Dispatch } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import StudyMethodInput from '../components/StudyMethodInput';
import StudySourceInput from '../components/StudySourceInput';

type HomeProps = {
  setScreen: Dispatch<string>
};

export default function Home({ setScreen }: HomeProps) {
  return (
    <Box>
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper elevation={3}>
          <Box p={1}>
            <StudyMethodInput />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper elevation={3}>
          <Box p={1}>
            <StudySourceInput />
          </Box>
        </Paper>
      </Grid>
    </Grid>
    <Box my={2}>
      <Button color="secondary" fullWidth={true} variant="contained" onClick={() => { setScreen('test') }}>
        Go Study
      </Button>
    </Box>
    </Box>
  );
}
