/* eslint-disable @typescript-eslint/consistent-type-assertions */
type AuthFormInputs = {
  email: string;
  password: string;
};

export type AuthFormInputName = keyof AuthFormInputs;

type AuthFormState = {
  inputs: AuthFormInputs;
  errors: AuthFormInputs;
  isValid: boolean;
  isPending: boolean;
};

type AuthFormAction =
  | { type: 'SET_FIELD'; name: AuthFormInputName; value: string }
  | { type: 'SET_PENDING'; value: boolean }
  | { type: 'VALIDATE_FORM' }
  | { type: 'RESET_FORM' };

export const initialState: AuthFormState = {
  inputs: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  isValid: false,
  isPending: false,
};

const validate = (name: AuthFormInputName, value: string): string => {
  if (name === 'email') {
    return /\w+@\w+\.\w{2,}/.test(value) ? '' : 'invalid email';
  }
  return /[a-z]/i.test(value) && /[0-9]/.test(value) && value.length >= 3 && value.length <= 12
    ? ''
    : 'invalid password';
};

export const formReducer = (state: AuthFormState, action: AuthFormAction): AuthFormState => {
  switch (action.type) {
    case 'SET_FIELD': {
      const inputs = {
        ...state.inputs,
        [action.name]: action.value,
      };
      const errors = {
        ...state.errors,
        [action.name]: validate(action.name, action.value),
      };
      return {
        ...state,
        inputs,
        errors,
        isValid: !Object.values(errors).some(Boolean),
      };
    }
    case 'RESET_FORM': {
      return initialState;
    }
    case 'VALIDATE_FORM': {
      const errors = Object.fromEntries(
        Object.entries(state.inputs).map(([key, value]) => [
          key,
          validate(key as AuthFormInputName, value),
        ]),
      ) as AuthFormInputs;

      return {
        ...state,
        errors,
        isValid: !Object.values(errors).some(Boolean),
      };
    }
    case 'SET_PENDING': {
      return {
        ...state,
        isPending: action.value,
      };
    }
  }
};
