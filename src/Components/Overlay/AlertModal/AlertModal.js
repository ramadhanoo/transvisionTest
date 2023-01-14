import React from 'react';
import styles from './AlertModal.styles';
import {useAlertModal} from './useAlertModal';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Themes';

export const AlertModal = props => {
  const {state, actions} = useAlertModal();
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

AlertModal.options = {
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
