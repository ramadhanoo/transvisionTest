import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../Transforms';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: ScreenWidth,
    height: ScreenHeight * 0.55,
    backgroundColor: Colors.background,
  },
  body: {
    width: ScreenWidth,
    height: ScreenHeight * 0.45,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: ScreenHeight * 0.07,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerImages: {
    flex: 1,
  },
  topCard: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerInfo: {
    flex: 0.7,
  },
  headerDisc: {
    color: Colors.greenLight,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.semibold,
  },
  headerText: {
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.semibold,
    color: Colors.black,
  },
  couponBenefitValue: {
    color: Colors.greenLight,
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.semibold,
  },
  cardPromo: {
    flex: 0.3,
    alignItems: 'flex-end',
    paddingHorizontal: 5,
  },
  promo: {
    fontSize: Fonts.size.sub_small,
    marginTop: 8,
    color: Colors.greyText,
  },
  time: {
    fontSize: Fonts.size.sub_small,
    marginTop: 15,
    color: Colors.greyText,
  },
  succesReedem: {
    color: Colors.greenLight,
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.semibold,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.greenLight,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
  },
  styleText: {
    fontSize: Fonts.size.small,
    paddingBottom: 2,
    fontFamily: Fonts.type.semibold,
  },
});
