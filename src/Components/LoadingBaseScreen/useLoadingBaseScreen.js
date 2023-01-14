import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useLoadingBaseScreen = () => {
  const themeRedux = useSelector(state => state.theme);
  const {
    backgroundColor,
    secondBackground,
    textColor,
    secondText,
    bottomBlur,
    iconsColors,
    statusBarColor,
    transparentColor,
  } = themeRedux.data[themeRedux.defaultTheme];

  return {
    state: {
      backgroundColor,
      themeRedux,
      textColor,
    },
    actions: {},
    data: {},
  };
};
