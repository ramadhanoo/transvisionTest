/* eslint-disable no-undef */
import {put, call, select, take, delay} from 'redux-saga/effects';
import {persistStore} from 'redux-persist';
import SessionActions, {SessionSelectors} from '../Redux/SessionRedux';
import createStore from '../Redux/index';
import StackComponent from '../Navigation/StackComponent';

/**
 * This sagas will called at the first time when app lauch
 * this function used to thandle navigation, or any logic that required
 * at initial stattup such as get get user information, set token, navigation, etc
 * @param {*} action
 *
 */

export function* test(api) {
  console.log('adas asasas dari test', api);
  yield put(SessionActions.clearSession());
}

export function* startup(api, store) {
  const {isLogged} = yield select(SessionSelectors.getSession, {
    isLogged: false,
    token: null,
  });
  // api.api.addMonitor(response => {
  //   if (!response.ok) {
  //     if (response.status === 401) {
  //       const {message_title, message} = response.data;
  //       const store = createStore();
  //       const persist = () => {
  //         store.dispatch(SessionActions.clearSession());
  //       };
  //       persistStore(store, null, persist);
  //     }
  //   }
  // });

  // if (isLogged === true) {
  //   StackComponent.setRootAuth();
  // } else {
  //   StackComponent.setRootMain();
  // }
  StackComponent.setRootMain();
}
