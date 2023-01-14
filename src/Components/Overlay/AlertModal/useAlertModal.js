import {useSelector} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import {useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';

export const useAlertModal = () => {
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state.sample);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [backAction]);

  const backAction = useCallback(() => {
    dismisModal();
    return true;
  }, []);

  function dismisModal() {
    NavigationServices.dismissOverlay();
  }

  return {
    state: {
      themes,
      sampleRedux,
    },
    actions: {
      dismisModal,
    },
    data: {},
  };
};
