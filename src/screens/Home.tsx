import React, { Dispatch } from 'react';

import { TestType } from '../types/test';

type HomeProps = {
  setTestType: Dispatch<TestType>
};

function Home({ setTestType }: HomeProps) {
  return (
    <h1>
      home
    </h1>
  );
}

export default Home;
