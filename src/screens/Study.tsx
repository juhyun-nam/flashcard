import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';

import { AppState } from '../reducer';
import FlashCard from '../components/FlashCard';

export default function Study() {
  const cards = useSelector((state: AppState) => state.cards);
  const [cardIndex, setCardIndex] = useState(0);
  const prev = () => { if (cardIndex !== 0) { setCardIndex(cardIndex - 1); } };
  const next = () => { if (cardIndex !== cards.length) { setCardIndex(cardIndex + 1); } };
  const iconStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <IconButton style={iconStyle} onClick={next}>
          <PrevIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <FlashCard front={cards[cardIndex].front} back={cards[cardIndex].back} />
      </Grid>
      <Grid item xs={3}>
        <IconButton style={iconStyle} onClick={prev}>
          <NextIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
