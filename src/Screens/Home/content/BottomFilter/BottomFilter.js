import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './BottomFilter.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../../Themes';
const BottomFilter = ({data, onPressItem, activeTab, indexData}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem(data.categoryId, indexData)}
      activeOpacity={0.8}
      style={styles.container(activeTab, data)}>
      <Text style={styles.textContainer}>{data.categoryName}</Text>
    </TouchableOpacity>
  );
};

BottomFilter.defaultProps = {
  onPressItem: () => {},
  data: {
    categoryName: '',
    categoryId: '',
  },
  activeTab: '00',
  indexData: 0,
};

export default BottomFilter;
