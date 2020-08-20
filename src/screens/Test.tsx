import React from 'react';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';

import { TestType } from '../TestType';
// import { Card } from '../Card';
import FlashCard from '../components/FlashCard';
import Cards from '../data/cards.json';

type TestProps = {
  testType: TestType
};

function Test({ testType }: TestProps) {
  if (testType === TestType.NONE) {
    throw new Error('Something is Wrong');
  }
  const iconStyle= {
    width: '100%',
    height: '100%'
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <IconButton style={iconStyle} onClick={() => { window.console.log('prev') }}>
          <PrevIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <FlashCard front={Cards.contents[0].front} back={Cards.contents[0].back} />
      </Grid>
      <Grid item xs={4}>
        <IconButton style={iconStyle} onClick={() => { window.console.log('next') }}>
          <NextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Test;
