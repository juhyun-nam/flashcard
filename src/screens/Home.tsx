import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import StudyMethodInput from '../components/StudyMethodInput';
import StudySourceInput from '../components/StudySourceInput';
import StudyMethod from '../StudyMethod';
import { CardsAction } from '../actions';
import { Card } from '../Card';
import cards from '../data/cards.json';

type HomeProps = {
  setScreen: Dispatch<string>
};

export default function Home({ setScreen }: HomeProps) {
  const [method, setMethod] = useState(StudyMethod.SHUFFLE);
  const labels = cards.data.map((elem) => ({ label: elem.subject, checked: true }));
  const [sources, setSources] = useState(labels);
  const dispatch = useDispatch();

  const handleStartButton = () => {
    let cardList = [] as Array<Card>;
    sources.forEach((elem, index) => {
      if (elem.checked) {
        cardList = cardList.concat(cards.data[index].contents);
      }
    });
    dispatch(CardsAction(cardList));
    setScreen('study');
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper elevation={3}>
            <Box p={1}>
              <StudyMethodInput method={method} setMethod={setMethod} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={3}>
            <Box p={1}>
              <StudySourceInput sources={sources} setSources={setSources} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box my={2}>
        <Button color="secondary" fullWidth variant="contained" onClick={handleStartButton}>
          Go Study
        </Button>
      </Box>
    </Box>
  );
}
