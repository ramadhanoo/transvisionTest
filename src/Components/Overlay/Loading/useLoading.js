import {useSelector} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';

export const useLoading = () => {
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state.sample);

  const dismisModal = () => {
    NavigationServices.dismissOverlay();
  };

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
