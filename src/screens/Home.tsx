import React, { Dispatch } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { TestType } from '../TestType';

type HomeProps = {
  setTestType: Dispatch<TestType>
};

function Home({ setTestType }: HomeProps) {
  return (
    <Paper elevation={3}>
      <Box p={1}>
        <Box m={1}>
          <Typography>
            시험 종류 선택
          </Typography>
        </Box>
        <Box>
          <ButtonGroup
            fullWidth={true}
            size="large"
            orientation="vertical"
            color="primary"
          >
            <Button onClick={() => setTestType(TestType.SHUFFLE)}>
              Shuffle
          </Button>
            <Button onClick={() => setTestType(TestType.RANDOM)}>
              Random
          </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Paper>
  );
}

export default Home;
