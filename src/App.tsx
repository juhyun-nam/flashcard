import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { StudyMethod } from './StudyMethod';
import Header from './components/Header';
import Home from './screens/Home';
import Study from './screens/Study';

function App() {
  const [studyMethod, setStudyMethod] = useState(StudyMethod.SHUFFLE);
  const [testSource, setTestSource] = useState({});
  const [screen, setScreen] = useState('home');
  const renderHome = () => (
    <Home
      studyMethod={studyMethod}
      setStudyMethod={setStudyMethod}
      testSource={testSource}
      setTestSource={setTestSource}
      setScreen={setScreen}
    />
  );
  const renderStudy = () => (
    <Study studyMethod={studyMethod} />
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

export default App;
