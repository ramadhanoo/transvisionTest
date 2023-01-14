import React, {useEffect, useCallback} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  BackHandler,
} from 'react-native';
import {ThemeSelectors} from '../../Redux/ThemeRedux';
import {useSelector} from 'react-redux';
import {Colors} from '../../Themes';
import styling from './BaseScreens.styles';
import NavigationServices from '../../Navigation/NavigationServices';

export const BaseScreens = React.forwardRef(({children, ...props}, ref) => {
  const themes = useSelector(ThemeSelectors.getColors);
  const isDark = useSelector(state => state.theme.dark);
  const styles = styling(props, themes);
  const {transparent} = props;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const backAction = useCallback(() => {
    NavigationServices.pop();
    return true;
  }, []);

  return (
    <View style={styles.boxContainer}>
      {Platform.OS === 'ios' ? <StatusBar barStyle={'light-content'} /> : null}
      {transparent === false ? <SafeAreaView style={styles.container} /> : null}
      <View {...props}>{children}</View>
    </View>
  );
});

BaseScreens.defaultProps = {
  safeAreaColor: Colors.white,
  transparent: false,
  colorBackground: Colors.background,
};
