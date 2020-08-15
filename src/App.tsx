import React from 'react';
// import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Home from './screens/Home';
// import Test from './screens/Test';

function App() {
  // const [testType, setTestType] = useState('');

  return (
    <>
      <Header />
      <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Home />
      </Container>
    </>
  );
}

export default App;
