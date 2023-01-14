import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {ScreenWidth, scaleWithPixel} from '../../Transforms';

export default StyleSheet.create({
  container2: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: scaleWithPixel(248),
    height: scaleWithPixel(350),
  },
  textCard: {
    width: ScreenWidth,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
});
