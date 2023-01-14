import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel} from '../../../Transforms';
import {ScreenWidth} from '../../../Transforms';

const styling = props =>
  StyleSheet.create({
    container: {
      marginTop: scaleWithPixel(30),
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    loadingStyle: {
      marginTop: 10,
    },
    containerStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: ScreenWidth * 0.04,
    },
  });

export default styling;
