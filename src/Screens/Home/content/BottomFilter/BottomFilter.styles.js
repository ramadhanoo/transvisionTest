import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Themes';
import {ScreenWidth} from '../../../../Transforms';

export default StyleSheet.create({
  container: (activeTab, data) => {
    return {
      paddingHorizontal: 10,
      marginRight: 10,
      paddingVertical: 10,
      borderColor: Colors.orange,
      borderBottomWidth: activeTab === data.categoryId ? 1 : 0,
    };
  },
  textContainer: {
    color: Colors.white,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.sub_small,
  },
});
