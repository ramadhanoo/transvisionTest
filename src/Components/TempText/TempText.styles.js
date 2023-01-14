import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../Transforms';

const Height_Header = ScreenHeight * 0.4;

const styling = (textSize, iconSize, fontTmpStyles, colorText) =>
  StyleSheet.create({
    tempTitle: {
      fontSize: textSize,
      color: colorText,
      marginLeft: 8,
      ...fontTmpStyles,
    },
    containerTemp: {
      flexDirection: 'row',
    },
    iconsTemp: {
      top: 2,
      width: iconSize,
      height: iconSize,
      borderRadius: 20,
      borderColor: colorText,
      borderWidth: 2,
    },
  });

export default styling;
