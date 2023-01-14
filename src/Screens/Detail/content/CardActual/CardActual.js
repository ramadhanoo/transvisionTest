import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import styles from './CardActual.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {Colors} from '../../../../../Themes';
import SwitchToggle from 'react-native-switch-toggle';
moment.locale('id');

const CardActual = ({
  pressItem,
  title,
  subTitle,
  colorBackground,
  iconName,
}) => {
  return (
    <TouchableOpacity
      onPress={pressItem}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.backgroundIcons(colorBackground)}>
          <Ionicons color={Colors.white} name={iconName} size={20} />
        </View>
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {subTitle}
          </Text>
        </View>
      </View>
      <View style={styles.rightContent} />
    </TouchableOpacity>
  );
};

CardActual.defaultProps = {
  pressItem: () => {},
  title: '',
  subTitle: '',
  iconName: 'notifications',
  colorBackground: Colors.schedule,
};

export default CardActual;
