import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../Transforms';

const ImageWidth = ScreenWidth * 0.3;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBaseColor,
  },
  bottomArea: {
    flex: 0,
    backgroundColor: Colors.headerBaseColor,
  },
  tabContainer: {
    paddingVertical: 5,
    backgroundColor: Colors.headerBaseColor,
  },
  containerCard: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: ScreenWidth * 0.04,
  },
  containerCardBody: {
    paddingVertical: 5,
    paddingHorizontal: ScreenWidth * 0.04,
  },
  loadingStyleCard: {
    width: '100%',
    backgroundColor: Colors.grey,
    marginTop: 10,
    borderRadius: 10,
    height: 120,
  },
  lottie: {
    width: ScreenWidth * 0.7,
    alignSelf: 'center',
    marginTop: 20,
  },
  loadingStyle: {
    width: ImageWidth,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    height: 40,
    marginRight: 10,
  },
  textStyle: {
    color: Colors.white,
  },
  contanerBody: {
    flex: 1,
  },
  containerList: {
    height: '100%',
  },
  textHeader: {
    fontSize: Fonts.size.small,
    marginBottom: scaleWithPixel(20),
    marginTop: scaleWithPixel(20),
    fontFamily: Fonts.type.bold,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.white,
  },
});
