import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import StartupActions from '../../Redux/StartupRedux';
import REDUX_PERSIST from '../../Config/ReduxPersist';

export const useAppstack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (REDUX_PERSIST.active) {
      dispatch(StartupActions.startup());
    }
  }, [dispatch]);

  return {
    state: {},
    actions: {},
    data: {},
  };
};
