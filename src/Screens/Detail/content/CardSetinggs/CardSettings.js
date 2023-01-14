import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import styles from './CardSettings.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {Colors} from '../../../../../Themes';
import SwitchToggle from 'react-native-switch-toggle';
import {DISTANCE} from '../../../../../Data/Constans';
moment.locale('id');

const CardSettings = ({
  switchPress,
  data,
  activeDistance,
  setActiveDistance,
}) => {
  return (
    <View>
      <View activeOpacity={0.8} style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.backgroundIcons(data.colorBackground)}>
            <Ionicons color={Colors.white} name={data.iconName} size={20} />
          </View>
          <Text numberOfLines={1} style={styles.title}>
            {data.name}
          </Text>
        </View>
        <View style={styles.rightContent}>
          <SwitchToggle
            switchOn={data.active}
            circleColorOff={Colors.white}
            circleColorOn={Colors.white}
            backgroundColorOn={Colors.activeColor}
            backgroundColorOff={Colors.inactiveColor}
            onPress={() => switchPress(data.id, !data.active)}
            containerStyle={styles.switchContainer}
            circleStyle={styles.circleStyle}
          />
        </View>
      </View>
      {(data.id === 5 || data.id === 6) && data.active ? (
        <View style={styles.detailContainer}>
          <View style={styles.leftContent}>
            <View style={styles.backgroundIcons(Colors.background)}>
              <Ionicons
                color={Colors.background}
                name={data.iconName}
                size={20}
              />
            </View>
            <Text numberOfLines={1} style={styles.title}>
              Delivery Time
            </Text>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.timeCard}>
              <Text>08:00</Text>
            </View>
          </View>
        </View>
      ) : null}

      {data.id === 7 && data.active ? (
        <View style={styles.detailContainerThender}>
          <View style={styles.leftContentThunder}>
            <View style={styles.backgroundIcons(Colors.background)}>
              <Ionicons
                color={Colors.background}
                name={data.iconName}
                size={20}
              />
            </View>
            <View style={styles.containerDistance}>
              <Text numberOfLines={1} style={styles.title}>
                Distance, km
              </Text>
              <View style={styles.rightContentThunder}>
                <View style={styles.distance}>
                  {DISTANCE.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.itemDistance(item, activeDistance)}
                        onPress={() => setActiveDistance(item)}>
                        <Text style={styles.textDistance}>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              <Text style={styles.subTitleText}>
                you'll only receive notifications about lightning strikes
                detected within the selected range from from locations
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      <View style={styles.line} />
    </View>
  );
};

CardSettings.defaultProps = {
  switchPress: () => {},
  activeDistance: 1,
  data: {
    id: 0,
    name: '',
    active: false,
    iconName: 'notifications',
    colorBackground: Colors.schedule,
  },
};

export default CardSettings;
