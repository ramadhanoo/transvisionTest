import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel, ScreenWidth} from '../../Transforms';

export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    backgroundColor: Colors.greyLight,
    marginTop: 10,
    height: scaleWithPixel(40),
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cardBox: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardParent: {flex: 0.85},
  textInputStyle: {flex: 1, color: Colors.grey, fontFamily: Fonts.type.regular},
});
