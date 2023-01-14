import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  clearSession: null,
  login: ['payload'],
});

export const SessionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  isLogged: false,
  token: null,
};

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  isLogged: state => state.session.isLogged,
  getSession: state => state.session,
};

/* ------------- Reducers ------------- */

export const clearSessionReducer = state => ({
  ...state,
  isLogged: false,
  token: null,
});

export const loginReducer = state => ({
  ...state,
  isLogged: true,
  token: 'asadasasas',
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR_SESSION]: clearSessionReducer,
  [Types.LOGIN]: loginReducer,
});
