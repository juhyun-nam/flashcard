import React, { useState } from 'react';
// import logo from './logo.svg';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Home from './screens/Home';
import Test from './screens/Test';

function App() {
  const [testType, setTestType] = useState('');

  return (
    <>
      <Header />
      <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
        {testType ? <Test /> : <Home setTestType={setTestType} />}
      </Container>
    </>
  );
}

export default App;
