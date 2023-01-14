import {StyleSheet} from 'react-native';

const styling = (props, themes) =>
  StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: props.backgroundColor,
    },
    boxContainer: {
      flex: 1,
    },
  });

export default styling;
