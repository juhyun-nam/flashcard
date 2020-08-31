import React, { useState } from 'react';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';

import cardContainer from '../CardContainer';
import FlashCard from '../components/FlashCard';

export default function Study() {
  const [content, setContent] = useState(cardContainer.getContent());
  const prev = () => {
    cardContainer.prev();
    setContent(cardContainer.getContent());
  };
  const next = () => {
    cardContainer.next();
    setContent(cardContainer.getContent());
  };
  const iconStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <Grid container spacing={2} style={{ height: '100%' }}>
      <Grid item xs={2}>
        <IconButton disabled={!cardContainer.hasPrev()} style={iconStyle} onClick={prev}>
          <PrevIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <FlashCard title={content.subject} front={content.front} back={content.back} />
      </Grid>
      <Grid item xs={2}>
        <IconButton disabled={!cardContainer.hasNext()} style={iconStyle} onClick={next}>
          <NextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
