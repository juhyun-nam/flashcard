import React, { Dispatch } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { StudyMethod } from '../StudyMethod';
import StudyMethodInput from '../components/StudyMethodInput';
import TestSourceInput from '../components/TestSourceInput';

type HomeProps = {
  studyMethod: StudyMethod,
  setStudyMethod: Dispatch<StudyMethod>,
  testSource: any,
  setTestSource: Dispatch<any>,
  setScreen: Dispatch<string>
};

export default function Home({ studyMethod, setStudyMethod, testSource, setTestSource, setScreen }: HomeProps) {
  return (
    <Box>
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper elevation={3}>
          <Box p={1}>
            <StudyMethodInput studyMethod={studyMethod} setStudyMethod={setStudyMethod} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper elevation={3}>
          <Box p={1}>
            <TestSourceInput testSource={testSource} setTestSource={setTestSource} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
    <Box my={2}>
      <Button color="secondary" fullWidth={true} variant="contained" onClick={() => { setScreen('test') }}>
        Go Test
      </Button>
    </Box>
    </Box>
  );
}
