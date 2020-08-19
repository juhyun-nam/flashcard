import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { TestType } from './TestType';
import Header from './components/Header';
import Home from './screens/Home';
import Test from './screens/Test';

function App() {
  const [testType, setTestType] = useState(TestType.NONE);
  const renderHome = () => (
    <Home setTestType={setTestType} />
  );
  const renderTest = () => (
    <Test />
  );
  return (
    <Container>
        <Header />
      <Box my={4}>
        {!testType? renderHome() : renderTest()}
      </Box>
    </Container>
  );
}

export default App;
