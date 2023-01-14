import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './Header.styles';
import {Colors, Fonts} from '../../../Themes';
import {TempText} from '../../TempText/TempText';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderDetail = ({
  status,
  tempText,
  tmpHigest,
  tmpLowest,
  onPressDetail,
  leftPress,
  rightPress,
}) => {
  return (
    <View style={styles.containerDetail}>
      <View style={styles.containerRowDetail}>
        <TouchableOpacity onPress={leftPress} style={styles.buttonStyleBack}>
          <Text style={styles.fontStyleHeader}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={rightPress} style={styles.buttonStyleBack}>
          <Text style={styles.fontStyleHeader}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRow}>
        <Fontisto
          name="day-cloudy"
          color={Colors.mainColor}
          size={Fonts.size.h1}
        />
        <TempText
          iconSize={10}
          colorText={Colors.mainColor}
          textSize={Fonts.size.h1}
          title={tempText}
        />
      </View>
      <View style={[styles.containerRow]}>
        <View style={styles.containerSuhu}>
          <Ionicons
            name="ios-arrow-up-outline"
            size={Fonts.size.small}
            color={Colors.mainColor}
          />
          <TempText
            iconSize={6}
            textSize={Fonts.size.sub_small}
            colorText={Colors.mainColor}
            title={tmpHigest}
            fontTmpStyles={styles.tmpTextStyles}
          />
        </View>
        <View style={styles.containerSuhu}>
          <Ionicons
            name="ios-arrow-down-outline"
            size={Fonts.size.small}
            color={Colors.mainColor}
          />
          <TempText
            iconSize={6}
            textSize={Fonts.size.sub_small}
            colorText={Colors.mainColor}
            title={tmpLowest}
            fontTmpStyles={styles.tmpTextStyles2}
          />
        </View>
      </View>
      <Text style={styles.statusText2}>{status}</Text>
    </View>
  );
};

HeaderDetail.defaultProps = {
  status: '',
  tempText: 0,
  tmpHigest: 0,
  tmpLowest: 0,
  onPressDetail: () => {},
  leftPress: () => {},
  rightPress: () => {},
};
