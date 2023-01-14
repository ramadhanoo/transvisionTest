import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';
import {Colors} from '../../Themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SearchBar = ({placeholderText, onChangeSearch}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <FontAwesome name={'search'} size={20} color={Colors.grey} />
      </View>
      <View style={styles.cardParent}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={placeholderText}
          onChangeText={onChangeSearch}
          placeholderTextColor={Colors.greyText}
        />
      </View>
    </View>
  );
};

SearchBar.defaultProps = {
  placeholderText: 'Search here...',
  onChangeSearch: () => {},
};
