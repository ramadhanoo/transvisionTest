import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel} from '../../../Transforms';

const styling = props =>
  StyleSheet.create({
    body: {
      flex: 1,
    },
    container: {
      marginTop: scaleWithPixel(30),
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    headerTitle: {
      color: Colors.greyText,
      fontFamily: Fonts.type.black,
      fontSize: Fonts.size.small_13,
    },
    titleSeeAll: {
      color: Colors.mainColor,
      fontFamily: Fonts.type.regular,
      fontSize: Fonts.size.sub_small,
    },
    scroler: {
      flex: 1,
    },
    containerStyle: {
      marginHorizontal: 20,
      backgroundColor: 'red',
    },
  });

export default styling;
