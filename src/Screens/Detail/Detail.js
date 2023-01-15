import React from 'react';
import styles from './Detail.styles';
import {useDetail} from './useDetail';
import {BaseScreens, HeaderDetail, Button} from '../../Components/index';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../Themes';
import moment from 'moment';
moment.locale('id');

const Detail = props => {
  const {data} = props;
  const {state, actions} = useDetail();
  const {done} = actions;
  const {} = state;

  return (
    <BaseScreens
      transparent={true}
      barColor={'dark-content'}
      safeAreaColor={Colors.background}
      style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode={'stretch'}
          style={styles.headerImages}
          source={{uri: data.couponBrandLogo}}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.topCard}>
          <View style={styles.headerInfo}>
            <Text style={styles.headerText}>{data.couponName}</Text>
            <Text style={styles.promo}>
              Promo sampai {moment(data.couponEndDate).format('DD MMMM YYYY')}
            </Text>
          </View>
          <View style={styles.cardPromo}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={styles.headerDisc}>
              {data.couponBenefitValue}
            </Text>
          </View>
        </View>
        <Text style={styles.succesReedem}>Coupon Successfully Redeemed</Text>
        <Text style={styles.time}>12.30 PM</Text>
        <Button
          styleText={styles.styleText}
          styleButton={styles.button}
          onPress={done}
          text={'DONE'}
        />
      </View>
    </BaseScreens>
  );
};

Detail.defaultProps = {
  data: {
    couponBrandLogo: '',
    couponName: '',
    couponBenefitValue: '',
    couponStatus: '',
  },
};

Detail.options = {
  topBar: {
    visible: false,
  },
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
  statusBar: {
    translucent: true,
  },
};

export default Detail;
