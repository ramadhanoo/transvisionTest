import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: Colors.mainColor,
  },
  buttonOutline: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: Colors.mainColor,
    borderWidth: 1,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.type.black,
    fontSize: Fonts.size.small,
  },
  textOutline: {
    fontFamily: Fonts.type.black,
    fontSize: Fonts.size.small,
    color: Colors.mainColor,
  },
  loader: {
    color: Colors.mainColor,
  },
  defaultSize: {backgroundColor: Colors.lightGrey, paddingHorizontal: 30},
});
