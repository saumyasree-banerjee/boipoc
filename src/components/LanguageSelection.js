import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Trans } from '@lingui/macro';

function LanguageSelection() {
  const myContext = useContext(AppContext);
  const [lan, setLan] = useState(myContext.lang1);
  const history = useHistory();
  const languageList = [
    {
      language: 'English',
      locale: 'en'
    },
    { language: 'Arabic', locale: 'ar' },
    { language: 'Spanish', locale: 'es' },
    { language: 'Dutch', locale: 'nl' }
  ];

  const reloadRoute = locale => {
    setLan(locale);
    myContext.setLang(locale);

    // history.go(0);
  };

  return (
    <>
      <div>
        <Trans id="languageSelection" />
      </div>
      <div className="listItems">
        {languageList.map(item => (
          <button
            type="button"
            key={item.locale}
            className={lan === item.locale ? 'activeLan' : ''}
            onClick={() => reloadRoute(item.locale)}
          >
            {item.language}
          </button>
        ))}
      </div>
      Selected Language : {lan}
    </>
  );
}

export default LanguageSelection;
