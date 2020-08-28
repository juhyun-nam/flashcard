import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from './screens/Header';
import Home from './screens/Home';
import Study from './screens/Study';

export default function App() {
  const [screen, setScreen] = useState('home');
  const renderHome = () => (
    <Home setScreen={setScreen} />
  );
  const renderStudy = () => (
    <Study />
  );
  return (
    <Container>
      <Header />
      <Box my={4}>
        {screen === 'home' ? renderHome() : renderStudy()}
      </Box>
    </Container>
  );
}
