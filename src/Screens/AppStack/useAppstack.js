import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import StartupActions from '../../Redux/StartupRedux';
import REDUX_PERSIST from '../../Config/ReduxPersist';
import SplashScreen from 'react-native-splash-screen';

export const useAppstack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (REDUX_PERSIST.active) {
      dispatch(StartupActions.startup());
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [dispatch]);

  return {
    state: {},
    actions: {},
    data: {},
  };
};
