import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../css/styles.css';
import Login from './Login/Login';
import Home from './Home/Home';
import { I18nProvider, I18n } from '@lingui/react';
import { Trans } from '@lingui/macro';
import catalogs from '../locales/catalogues';
import AppContext from '../contexts/AppContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 40%;
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const AppContainer = styled.div`
  width: 80%;
  font-size: 2.5rem;
`;

const Welcome = () => {
  const [lang, setLang] = useState('en');
  const languageSettings = {
    lang1: lang,
    setLang
  };

  return (
    <AppContext.Provider value={languageSettings}>
      <I18nProvider language={lang} catalogs={catalogs}>
        <Container>
          <Wrapper>
            <AppContainer>
              <BrowserRouter>
                <Title>
                  <Trans id="Simple Login" />
                </Title>
                <div>
                  <div className="content">
                    <Switch>
                      <Route exact path="/" component={Login} />
                      <Route path="/home" component={Home} />
                    </Switch>
                  </div>
                </div>
              </BrowserRouter>
            </AppContainer>
          </Wrapper>
        </Container>
      </I18nProvider>
    </AppContext.Provider>
  );
};

export default Welcome;
