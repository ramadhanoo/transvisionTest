import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styling from './MenuSection.styles';

export const MenuSection = React.forwardRef(({children, ...props}, ref) => {
  const styles = styling(props);
  const {title, clickText, onPressAll, stylingContainer} = props;

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.headerTitle}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPressAll}>
          <Text style={styles.titleSeeAll}>{clickText}</Text>
        </TouchableOpacity>
      </View>
      <View style={stylingContainer}>{children}</View>
    </View>
  );
});

MenuSection.defaultProps = {
  title: 'Title',
  clickText: 'See all',
  onPressAll: () => {},
};
