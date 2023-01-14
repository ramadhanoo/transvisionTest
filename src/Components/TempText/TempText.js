import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styling from './TempText.styles';
import {Colors, Fonts} from '../../Themes';

export const TempText = ({
  textSize,
  iconSize,
  title,
  fontTmpStyles,
  colorText,
}) => {
  const styles = styling(textSize, iconSize, fontTmpStyles, colorText);
  return (
    <View style={styles.containerTemp}>
      <Text style={styles.tempTitle}>{title}</Text>
      <View style={styles.iconsTemp} />
    </View>
  );
};

TempText.defaultProps = {
  title: '',
  textSize: 0,
  iconSize: 0,
  fontTmpStyles: {},
  colorText: Colors.white,
};
