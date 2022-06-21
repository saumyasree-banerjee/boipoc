import React from 'react';
import LanguageSelection from '../LanguageSelection';
import { Trans } from '@lingui/macro';

function Home() {
  return (
    <div className="homePage">
      <h2>
        <Trans id="Welcome Home" />
      </h2>
      <LanguageSelection />
    </div>
  );
}

export default Home;
