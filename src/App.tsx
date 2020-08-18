import React, { useState } from 'react';

import Header from './components/Header';
import Home from './screens/Home';
import Test from './screens/Test';
import { render } from 'react-dom';

function App() {
  const [testType, setTestType] = useState('');
  const renderHome = () => (
    <Home setTestType={setTestType} />
  );
  const renderTest = () => (
    <Test />
  );

  return (
    <>
      <Header />
      {!testType? renderHome() : renderTest()}
    </>
  );
}

export default App;
