import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.styles';
import {Colors} from '../../Themes';

export const Button = props => {
  try {
    const styleButton = props.outline ? styles.buttonOutline : styles.button;
    const styleText = props.outline ? styles.textOutline : styles.text;
    if (props.isLoading) {
      return (
        <View style={[styleButton, props.styleButton, styles.defaultSize]}>
          <ActivityIndicator large color={props.colorLoader} />
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          disabled={props.disabled}
          activeOpacity={props.opacity}
          style={[styleButton, props.styleButton]}
          onPress={props.onPress}>
          <Text style={[styleText, props.styleText]}>{props.text}</Text>
        </TouchableOpacity>
      );
    }
  } catch (err) {
    console.tron.log('ERROR Button ', err.message);
    return null;
  }
};

Button.defaultProps = props => {
  return {
    isLoading: false,
    text: 'Simpan',
    disabled: false,
    onPress: () => {},
    opacity: 0.8,
    styleButton: {},
    styleText: {},
    outline: false,
    styleLoader: styles.loader,
    colorLoader: Colors.mainColor,
  };
};
