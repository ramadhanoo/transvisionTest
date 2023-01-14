import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const Height_Header = ScreenHeight * 0.1;

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    paddingVertical: 20,
    backgroundColor: Colors.headerBaseColor,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsMap: {
    flexDirection: 'row',
    flex: 0.7,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
