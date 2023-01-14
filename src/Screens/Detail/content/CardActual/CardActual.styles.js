import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    borderRadius: 5,
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 6,
    paddingHorizontal: 10,
  },
  rightContent: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 6,
  },
  leftContent: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  backgroundIcons: color => {
    return {
      backgroundColor: color,
      padding: 5,
      borderRadius: 5,
      marginRight: 8,
    };
  },
  title: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.sub_small,
  },
  subtitle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.sub_small,
    color: Colors.greyText,
    marginTop: 3,
  },
  switchContainer: {
    width: 45,
    height: 25,
    borderRadius: 20,
    padding: 2,
  },
  circleStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
