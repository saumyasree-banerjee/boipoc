import { useContext } from 'react';

import {
  username,
  required,
  password
} from '../utils/inputFieldValidatorsUtils';

// Validation

const inputFieldValidations = validationField => {
  switch (validationField) {
    case 'username':
      return [
        {
          check: username,
          message: 'Alphanumeric with length 8-20'
        },
        {
          check: required,
          message: 'Required'
        }
      ];
    case 'password':
      return [
        {
          check: password,
          message:
            'At least one upper case & lower case alphabet, one digit and one special character.\nMinimum eight characters length'
        },
        {
          check: required,
          message: 'Required'
        }
      ];
    default:
      return [];
  }
};
export default inputFieldValidations;
