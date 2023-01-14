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
    paddingHorizontal: 10,
  },
  rightContent: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: Colors.greyLight2,
    borderBottomWidth: 0,
    paddingBottom: 6,
  },
  leftContent: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.greyLight2,
    borderBottomWidth: 0,
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
  detailContainer: {
    width: ScreenWidth * 0.9,
    paddingVertical: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  timeCard: {
    backgroundColor: Colors.greyLight2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  line: {
    width: ScreenWidth * 0.81,
    height: 1,
    borderColor: Colors.greyLight2,
    borderBottomWidth: 1,
    marginBottom: 7,
    alignSelf: 'flex-end',
  },
  detailContainerThender: {
    width: ScreenWidth * 0.9,
    paddingVertical: 5,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  rightContentThunder: {
    flex: 1,
    justifyContent: 'center',
    borderColor: Colors.greyLight2,
    marginTop: 10,
    paddingBottom: 6,
  },
  leftContentThunder: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.greyLight2,
    borderBottomWidth: 0,
    paddingBottom: 6,
  },
  subTitleText: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.regular,
    color: Colors.greyText,
  },
  distance: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.inactiveColor,
    borderRadius: 10,
    marginTop: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemDistance: (item, activeDistance) => {
    return {
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: item === activeDistance ? Colors.white : 'transparent',
    };
  },
  textDistance: {
    paddingHorizontal: 15,
    color: Colors.activeColor,
  },
  containerDistance: {
    flex: 1,
  },
});
