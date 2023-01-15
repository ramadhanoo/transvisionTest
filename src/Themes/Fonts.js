import Colors from './Colors';
import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  PixelRatio,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;
const scaleValue = PixelRatio.get() / 2;

const IS_ANDROID = Platform.OS === 'android';

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const type = {
  bold: 'Raleway-Bold',
  semibold: 'Raleway-Bold',
  black: 'Raleway-Black',
  light: 'Raleway-Light',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
  thin: 'Raleway-Thin',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 22,
  h5: 20,
  h6: 19,
  medium: normalize(20),
  input: normalize(18),
  regular: normalize(17),
  small_13: normalize(16),
  small: normalize(15),
  sub_small: normalize(12),
  mini: normalize(10),
  tiny: normalize(8),
};

const style = {
  h1: {
    fontFamily: type.regular,
    fontSize: size.h1,
    color: Colors.brown,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
    color: Colors.brown,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
    color: Colors.brown,
  },
  h4: {
    fontFamily: type.regular,
    fontSize: size.h4,
    color: Colors.brown,
  },
  h5: {
    fontFamily: type.regular,
    fontSize: size.h5,
    color: Colors.brown,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
    color: Colors.brown,
  },
  inputBoldWhite: {
    fontFamily: type.bold,
    fontSize: size.input,
    color: 'white',
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular,
    color: Colors.brown,
  },
  normalWhite: {
    fontFamily: type.regular,
    fontSize: size.regular,
    color: Colors.white,
  },
  regularBoldBlack: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: Colors.greyText,
    fontWeight: 'bold',
  },
  regularBoldBrown: {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.brown,
    fontWeight: 'bold',
  },
  regularBlack: {
    fontFamily: type.regular,
    fontSize: size.regular,
    color: Colors.brown,
  },
  description: {
    fontFamily: type.regular,
    fontSize: size.medium,
  },
  mediumSemiboldWhite: {
    fontFamily: type.semibold,
    fontSize: size.medium,
    color: '#FFFF',
  },
  mediumSemiboldBlack: {
    fontFamily: type.semibold,
    fontSize: size.medium,
    color: Colors.brown,
  },
  mediumSemiboldBrown: {
    fontFamily: type.semibold,
    fontSize: size.medium,
    color: Colors.brown,
  },
  mediumRegularWhite: {
    fontFamily: type.regular,
    fontSize: size.medium,
    color: '#FFFF',
  },
  mediumRegularBlack: {
    fontFamily: type.regular,
    fontSize: size.medium,
    color: Colors.brown,
  },
  mediumRegularBrown: {
    fontFamily: type.regular,
    fontSize: size.medium,
    color: Colors.brown,
  },
  mediumBold: {
    fontFamily: type.bold,
    fontSize: size.medium,
    color: Colors.brown,
    fontWeight: 'bold',
  },
  mediumBoldBlack: {
    fontFamily: type.black,
    fontSize: size.medium,
    color: Colors.brown,
    fontWeight: 'bold',
  },
  smallRegularWhite: {
    fontFamily: type.regular,
    fontSize: size.small,
    color: '#FFFF',
  },
  smallRegularBlack: {
    fontFamily: type.regular,
    fontSize: size.small,
    color: Colors.brown,
  },
  smallRegularBrown: {
    fontFamily: type.regular,
    fontSize: size.small,
    color: Colors.brown,
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: Colors.brown,
  },
  smallBoldBrown: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: Colors.brown,
  },
  smallSemiBoldWhite: {
    fontFamily: type.semibold,
    fontSize: size.small,
    color: '#FFF',
  },
  smallSemiBoldBlack: {
    fontFamily: type.bold,
    fontSize: size.semibold,
    color: Colors.brown,
  },
  shadowCard: {
    shadowColor: Colors.background,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    elevation: 3,
  },
};

export default {
  type,
  size,
  style,
};
