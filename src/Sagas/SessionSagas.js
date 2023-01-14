import {put, call, select} from 'redux-saga/effects';
import StackComponent from '../Navigation/StackComponent';

export function clearSession(api) {
  api.api.setHeaders({
    Authorization: '',
  });
  StackComponent.setRootAuth();
}
