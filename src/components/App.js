import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../css/styles.css';
import Welcome from './Welcome';

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

const App = () => {
  return <Welcome />;
};

export default App;
