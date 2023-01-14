import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styling = (props, themes) =>
  StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor:
        props.transparent === true ? 'transparent' : props.safeAreaColor,
    },
    boxContainer: {
      flex: 1,
      backgroundColor: props.colorBackground,
    },
  });

export default styling;
