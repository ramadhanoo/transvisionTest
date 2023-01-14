import React from 'react';
import styles from './Detail.styles';
import {useDetail} from './useDetail';
import {BaseScreens, HeaderDetail, Button} from '../../Components/index';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../Themes';

const Detail = props => {
  const {state, actions} = useDetail();
  const {
    done,
    cancel,
    switchPress,
    switchPressWeatherUpdate,
    switchPressSevereUpdate,
    setActiveDistance,
    openModal,
  } = actions;
  const {
    weatherRedux,
    dataSettings,
    dataSettingsWeatherUpdate,
    dataSettingsSevereUpdate,
    activeDistance,
  } = state;

  return (
    <BaseScreens safeAreaColor={Colors.background} style={styles.container}>
      <Text>kambing</Text>
    </BaseScreens>
  );
};

Detail.options = {
  topBar: {
    visible: false,
  },
  modalPresentationStyle: 'overCurrentContext',
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
};

export default Detail;
