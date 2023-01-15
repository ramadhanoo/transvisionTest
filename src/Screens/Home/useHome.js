import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../Redux/ThemeRedux';
import NavigationServices from '../../Navigation/NavigationServices';
import CategoryActions from '../../Redux/CategoryRedux';
import CouponActions from '../../Redux/CouponRedux';
import {useEffect, useState, useRef} from 'react';
import moment from 'moment';
import {filterData} from './Home.mapper';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const categoryRedux = useSelector(state => state.category);
  const couponRedux = useSelector(state => state.coupon);
  const [activeTab, setActiveTab] = useState('5');
  const scrolling = useRef(null);

  useEffect(() => {
    dispatch(CategoryActions.setCategoryReq({actionType: 'load'}));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionsTabs = (id, index) => {
    scrolling.current?.scrollToIndex({
      animated: true,
      index: index,
      viewOffset: 70,
    });
    var newData = filterData(couponRedux.data, id);
    dispatch(
      CouponActions.setFilteredData({
        filtredData: newData,
        activeTab: id,
      }),
    );
  };

  const refreshData = () => {
    dispatch(CategoryActions.setCategoryReq({actionType: 'refresh'}));
  };

  const onPressDetail = item => {
    NavigationServices.push('home.detail', {data: item});
  };

  return {
    state: {
      themes,
      setActiveTab,
      activeTab,
      categoryRedux,
      couponRedux,
      scrolling,
    },
    actions: {
      actionsTabs,
      refreshData,
      onPressDetail,
    },
    data: {},
  };
};
