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
  const done = () => {
    NavigationServices.pop();
  };

  return {
    state: {
      themes,
    },
    actions: {
      done,
    },
    data: {},
  };
};
