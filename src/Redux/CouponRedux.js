import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setCouponReq: ['payload'],
  succesFetchCoupon: ['payload'],
  errorFetchCoupon: ['payload'],
  setLoadingCoupon: ['payload'],
  setFilteredData: ['payload'],
});

export const CouponTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  isRefresh: false,
  error: false,
  message: '',
  actionType: 'refresh', //refresh || load
  filtredData: [],
  activeTab: '00',
};

/* ------------- Selectors ------------- */

export const CouponSelectors = {
  getData: state => state.coupon.data,
};

/* ------------- Reducers ------------- */

export const setCouponReqReducer = state => ({
  ...state,
});

export const setFilteredDataReducer = (state, {payload}) => ({
  ...state,
  filtredData: payload.filtredData,
  activeTab: payload.activeTab,
});

export const succesFetchCouponReducer = (state, {payload}) => ({
  ...state,
  data: payload?.data ?? [],
  loading: false,
  error: false,
  isRefresh: false,
  message: '',
});

export const errorFetchCouponReducer = (state, {payload}) => ({
  ...state,
  data: [],
  loading: false,
  isRefresh: false,
  error: true,
  message: '',
});

export const setLoadingCouponReducer = (state, {payload}) => ({
  ...state,
  loading: payload?.actionType === 'refresh' ? false : payload.loading,
  error: payload.error,
  isRefresh: payload?.actionType === 'refresh' ? payload.loading : false,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COUPON_REQ]: setCouponReqReducer,
  [Types.SUCCES_FETCH_COUPON]: succesFetchCouponReducer,
  [Types.ERROR_FETCH_COUPON]: errorFetchCouponReducer,
  [Types.SET_LOADING_COUPON]: setLoadingCouponReducer,
  [Types.SET_FILTERED_DATA]: setFilteredDataReducer,
});
