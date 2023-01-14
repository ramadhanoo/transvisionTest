import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './CardCategory.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../../../Themes';
import {Button} from '../../../../Components/index';
import moment from 'moment';
moment.locale('id');

const CardCategory = ({onPressItem, data}) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.imageContainerStyle}>
        <Image
          resizeMode={'contain'}
          source={{uri: data.couponBrandLogo}}
          style={styles.banner}
        />
      </View>
      <View style={styles.textContainerStyle}>
        <Text numberOfLines={1} style={styles.headerText}>
          {data.couponName}
        </Text>
        <View style={styles.containerCard}>
          <Text numberOfLines={1} style={styles.couponBenefitValue}>
            {data.couponBenefitValue}
          </Text>
          <Text numberOfLines={1} style={styles.couponBenefitValueDesc}>
            Off
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.promo}>
          Promo sampai {moment(data.couponEndDate).format('DD MMMM YYYY')}
        </Text>
        <Button
          styleText={styles.styleText}
          styleButton={styles.button(data.couponStatus)}
          text={'Tukarkan'}
          disabled={data.couponStatus === 'active' ? false : true}
        />
      </View>
    </TouchableOpacity>
  );
};

CardCategory.defaultProps = {
  onPressItem: () => {},
  data: {
    couponBrandLogo: '',
    couponName: '',
    couponBenefitValue: '',
    couponStatus: '',
  },
};

export default CardCategory;
