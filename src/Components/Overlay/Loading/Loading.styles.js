import {StyleSheet} from 'react-native';
import {Colors} from '../../../Themes';
import {ScreenWidth} from '../../../Transforms';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});
