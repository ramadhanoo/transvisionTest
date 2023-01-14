import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../Redux/ThemeRedux';
import NavigationServices from '../../Navigation/NavigationServices';
import {useState} from 'react';
import {
  DATA_SETTINGS,
  DATA_SETTINGS_WEATHER_UPDATE,
  DATA_SETTINGS_SEVERE_UPDATE,
} from '../../Data/Constans';

export const useDetail = () => {
  const dispatch = useDispatch();
  const themes = useSelector(ThemeSelectors.getColors);
  const whRedux = useSelector(state => state.weatherHourly);
  const weatherRedux = useSelector(state => state.weather);
  const [dataSettings, setDataSettings] = useState(DATA_SETTINGS);
  const [dataSettingsWeatherUpdate, setDataSettingsWeatherUpdate] = useState(
    DATA_SETTINGS_WEATHER_UPDATE,
  );
  const [dataSettingsSevereUpdate, setDataSettingsSevereUpdate] = useState(
    DATA_SETTINGS_SEVERE_UPDATE,
  );
  const [activeDistance, setActiveDistance] = useState(1);

  const actionsData = data => {};
  const onRefresh = () => {};

  const dismisModal = () => {
    NavigationServices.dismissModal();
  };

  const switchPress = (id, active) => {
    const newState = dataSettings.map(obj =>
      obj.id === id ? {...obj, active: active} : obj,
    );

    setDataSettings([...newState]);
  };

  const switchPressWeatherUpdate = (id, active) => {
    const newState = dataSettingsWeatherUpdate.map(obj =>
      obj.id === id ? {...obj, active: active} : obj,
    );

    setDataSettingsWeatherUpdate([...newState]);
  };

  const switchPressSevereUpdate = (id, active) => {
    const newState = dataSettingsSevereUpdate.map(obj =>
      obj.id === id ? {...obj, active: active} : obj,
    );

    setDataSettingsSevereUpdate([...newState]);
  };

  const openModal = () => {
    NavigationServices.showModal('home.detail');
  };

  const done = () => {
    NavigationServices.pop();
  };

  const cancel = () => {
    NavigationServices.pop();
  };

  return {
    state: {
      themes,
      whRedux,
      weatherRedux,
      dataSettings,
      dataSettingsWeatherUpdate,
      dataSettingsSevereUpdate,
      activeDistance,
    },
    actions: {
      actionsData,
      switchPress,
      switchPressWeatherUpdate,
      switchPressSevereUpdate,
      onRefresh,
      dismisModal,
      openModal,
      setActiveDistance,
      done,
      cancel,
      setDataSettings,
    },
    data: {},
  };
};
