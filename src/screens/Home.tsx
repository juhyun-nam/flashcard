import React, { Dispatch, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import StudyMethod from '../types/StudyMethod';
import StudyMethodInput from '../components/StudyMethodInput';
import StudySourceInput from '../components/StudySourceInput';
import cardContainer from '../CardContainer';
import cards from '../data/cards.json';

type HomeProps = {
  setScreen: Dispatch<string>
};

export default function Home({ setScreen }: HomeProps) {
  const [method, setMethod] = useState(StudyMethod.SHUFFLE);
  const labels = cards.data.map((elem) => ({ label: elem.subject, checked: true }));
  const [sources, setSources] = useState(labels);

  const handleStartButton = () => {
    const cardList = [] as Array<string>;
    sources.forEach((elem) => {
      if (elem.checked) {
        cardList.push(elem.label);
      }
    });
    cardContainer.apply(cardList, method);
    setScreen('study');
  };
  return (
    <>
      <Box my={1}>
        <Paper elevation={3}>
          <Box p={1}>
            <StudyMethodInput method={method} setMethod={setMethod} />
          </Box>
        </Paper>
      </Box>
      <Paper elevation={3}>
        <Box p={1}>
          <StudySourceInput sources={sources} setSources={setSources} />
        </Box>
      </Paper>
      <Box my={2}>
        <Button color="secondary" fullWidth variant="contained" onClick={handleStartButton}>
          Go Study
        </Button>
      </Box>
    </>
  );
}
