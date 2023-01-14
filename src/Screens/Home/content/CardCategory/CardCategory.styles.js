import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Themes';
import {ScreenWidth} from '../../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
  heading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.black,
  },
  subHeading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.medium,
    marginTop: 5,
    color: Colors.greyText,
  },
  imageContainerStyle: {
    flex: 0.45,
  },
  textContainerStyle: {
    flex: 0.55,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  banner: {
    flex: 1,
    backgroundColor: Colors.greyLight2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  headerText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.semibold,
    color: Colors.black,
  },
  couponBenefitValue: {
    color: Colors.greenLight,
    fontSize: Fonts.size.small_13,
    fontFamily: Fonts.type.semibold,
  },
  couponBenefitValueDesc: {
    color: Colors.greyLight3,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.medium,
    marginLeft: 5,
  },
  button: active => {
    return {
      width: '100%',
      backgroundColor:
        active === 'active' ? Colors.greenLight : Colors.disableColor,
      paddingVertical: 5,
      marginTop: 10,
    };
  },
  styleText: {
    fontSize: Fonts.size.sub_small,
    paddingBottom: 2,
    fontFamily: Fonts.type.semibold,
  },
  promo: {
    fontSize: Fonts.size.mini,
    marginTop: 15,
  },
});
