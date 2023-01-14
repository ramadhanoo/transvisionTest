import React from 'react';
import styles from './Loading.styles';
import {useLoading} from './useLoading';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Themes';

export const Loading = props => {
  const {state, actions} = useLoading();
  const {dismisModal} = actions;
  const {themes} = state;

  return (
    <TouchableOpacity onPress={() => dismisModal()} style={styles.container}>
      <View style={styles.box}>
        <ActivityIndicator size={'large'} color={Colors.mainColor} />
      </View>
    </TouchableOpacity>
  );
};

Loading.options = {
  topBar: {
    visible: false,
  },
  overlay: {
    interceptTouchOutside: true,
  },
  layout: {
    componentBackgroundColor: 'transparent',
  },
};
