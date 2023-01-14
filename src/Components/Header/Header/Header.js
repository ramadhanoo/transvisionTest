import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Header.styles';
import Logo from '../../../Images/logo.svg';
import Notificaion from '../../../Images/notification.svg';
import Profile from '../../../Images/profile.svg';
import Search from '../../../Images/search.svg';
export const Header = ({onPressSearch, onPressProfile, onPressNotificaion}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.iconsMap}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressSearch}>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressNotificaion}>
          <Notificaion />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressProfile}>
          <Profile />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Header.defaultProps = {
  onPressSearch: () => {},
  onPressProfile: () => {},
  onPressNotificaion: () => {},
};
