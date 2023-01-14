import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {useAppstack} from './useAppstack';
import {Colors, Images} from '../../Themes';
import {BaseScreens} from '../../Components/index';
import styles from './Appstack.styles';

const Appstack = props => {
  const {state, actions} = useAppstack();
  const {} = actions;
  const {} = state;

  return (
    <BaseScreens style={styles.body}>
      <ActivityIndicator size={'large'} />
    </BaseScreens>
  );
};

Appstack.options = {
  topBar: {
    visible: false,
  },
};

export default Appstack;
