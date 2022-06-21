import React, { useState } from 'react';
import styled from 'styled-components';
import inputFieldValidations from '../../config/inputFieldValidations';
import { inputValidation } from '../../utils/inputFieldValidatorsUtils';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import { LanguageSelection } from '../LanguageSelection';

const InputFields = styled.div`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
`;

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState({});
  const [showValidationError, setShowValidationError] = useState({});
  const loginEnter = () => {
    if (username.length === 0) {
      validateInput('username', '');
    }
    if (password.length === 0) {
      validateInput('password', '');
    }
    const fieldHasErrors = Object.values(validationError).includes(true);
    const mandatoryFieldLength = username.length > 0 && password.length > 0;
    if (!fieldHasErrors && mandatoryFieldLength) {
      console.log('Username =' + username + 'and Password =' + password);
      allowLogin();
    } else {
      // allowLogin();
      setShowValidationError({ username: true, password: true });
    }
  };

  const allowLogin = () => {
    //TODO API call to validate username and password
    props.history.push('/home');
  };

  const create = () => {
    console.log('create now');
    alert('create account handler');
  };

  const forgot = () => {
    console.log('onForgot');
    alert('forgot password');
  };

  const handleUserName = e => {
    const { name, value } = e.target;
    setUsername(value);
    validateInput(name, value);
  };

  const handlePassword = e => {
    const { name, value } = e.target;
    setPassword(value);
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    const validationObj = inputValidation(inputFieldValidations(name), value);
    setValidationError(prevState => ({
      ...prevState,
      [name]: validationObj.message
    }));
    setShowValidationError(prevState => ({
      ...prevState,
      [name]: validationObj.error
    }));
  };

  return (
    <div>
      <div>
        <Trans id="Message Inbox" />
      </div>
      <InputFields>
        <div className="marginb">
          <div className="underline">
            <input
              type="text"
              name="username"
              placeholder="UserName"
              onChange={handleUserName}
            />
          </div>

          <div className="errorMsg">
            {showValidationError.username ? validationError.username : ''}
          </div>
        </div>

        <div className="marginb">
          <div className="underline">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div className="errorMsg">
            {showValidationError.password ? validationError.password : ''}
          </div>
        </div>
      </InputFields>

      <div className="forgotText marginb curPointer" onClick={() => forgot()}>
        <Trans id="forgotText" />
      </div>

      <div>
        <button
          type="button"
          onClick={() => loginEnter()}
          className="signIn curPointer"
        >
          <Trans id="signIn" />
        </button>
      </div>

      <div
        type="button"
        onClick={() => create()}
        className="createAccount curPointer"
      >
        <Trans id="createAcc" />
      </div>
    </div>
  );
}

export default Login;
