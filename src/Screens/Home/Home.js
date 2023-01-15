import React from 'react';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens, Header, Section} from '../../Components/index';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {Colors, Images} from '../../Themes';
import moment from 'moment';
import BottomFilter from './content/BottomFilter/BottomFilter';
import CardCategory from './content/CardCategory/CardCategory';
import Lottie from 'lottie-react-native';
import {ScreenWidth} from '../../Transforms';
moment.locale('id');

const Home = props => {
  const {state, actions} = useHome();
  const {onPressDetail, actionsTabs, refreshData} = actions;
  const {categoryRedux, couponRedux, scrolling} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.headerBaseColor}
      style={styles.container}>
      <Header />
      <View style={styles.contanerBody}>
        <Section
          isLoading={couponRedux.loading}
          shimmerSize={4}
          containerBodyStyle={styles.containerCardBody}
          loadingContainerStyles={styles.containerCardBody}
          loadingIndicatorStyle={styles.loadingStyleCard}>
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={Colors.white}
                titleColor={Colors.white}
                refreshing={couponRedux.isRefresh}
                onRefresh={refreshData}
              />
            }
            ListHeaderComponent={
              couponRedux.filtredData.length !== 0 ? (
                <Text style={styles.textHeader}>Benefit Kupon Untuk Kamu</Text>
              ) : null
            }
            data={couponRedux.filtredData}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Lottie
                source={Images.blank}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
            }
            style={styles.containerList}
            renderItem={({item}) => (
              <CardCategory
                onPressItem={() => onPressDetail(item)}
                data={item}
              />
            )}
            keyExtractor={(item, i) => i.toString()}
          />
        </Section>
      </View>
      <View style={styles.tabContainer}>
        <Section
          isLoading={categoryRedux.loading}
          shimmerSize={4}
          containerBodyStyle={styles.containerCard}
          loadingContainerStyles={styles.containerCard}
          loadingIndicatorStyle={styles.loadingStyle}>
          <FlatList
            ref={scrolling}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryRedux.data}
            renderItem={({item, index}) => {
              return (
                <BottomFilter
                  key={index}
                  indexData={index}
                  data={item}
                  activeTab={couponRedux.activeTab}
                  onPressItem={actionsTabs}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Section>
      </View>
      <SafeAreaView style={styles.bottomArea} />
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: Colors.headerBaseColor,
  },
  navigationBar: {
    backgroundColor: Colors.headerBaseColor,
  },
};

export default Home;
