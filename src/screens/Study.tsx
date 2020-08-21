import React from 'react';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';

import { StudyMethod } from '../StudyMethod';
import FlashCard from '../components/FlashCard';
import Cards from '../data/cards.json';

type TestProps = {
  studyMethod: StudyMethod
};

export default function Study({ studyMethod }: TestProps) {
  if (studyMethod === StudyMethod.NONE) {
    throw new Error('Something is Wrong');
  }
  const iconStyle= {
    width: '100%',
    height: '100%'
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <IconButton style={iconStyle} onClick={() => { window.console.log('prev') }}>
          <PrevIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <FlashCard front={Cards.contents[0].front} back={Cards.contents[0].back} />
      </Grid>
      <Grid item xs={3}>
        <IconButton style={iconStyle} onClick={() => { window.console.log('next') }}>
          <NextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
