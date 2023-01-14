import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setCategoryReq: ['payload'],
  succesFetchCategory: ['payload'],
  errorFetchCategory: ['payload'],
  setLoadingCategory: ['payload'],
});

export const CategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  isRefresh: false,
  error: false,
  message: '',
  actionType: 'refresh', //refresh || load
};

/* ------------- Selectors ------------- */

export const CategorySelectors = {
  getData: state => state.category.data,
};

/* ------------- Reducers ------------- */

export const setCategoryReqReducer = (state, {payload}) => ({
  ...state,
});

export const succesFetchCategoryReducer = (state, {payload}) => ({
  ...state,
  data: payload?.data ?? [],
  loading: false,
  error: false,
  isRefresh: false,
  message: '',
});

export const errorFetchCategoryReducer = (state, {payload}) => ({
  ...state,
  data: [],
  loading: false,
  isRefresh: false,
  error: true,
  message: '',
});

export const setLoadingCategoryReducer = (state, {payload}) => ({
  ...state,
  loading: payload?.actionType === 'refresh' ? false : payload.loading,
  error: payload.error,
  isRefresh: payload?.actionType === 'refresh' ? payload.loading : false,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORY_REQ]: setCategoryReqReducer,
  [Types.SUCCES_FETCH_CATEGORY]: succesFetchCategoryReducer,
  [Types.ERROR_FETCH_CATEGORY]: errorFetchCategoryReducer,
  [Types.SET_LOADING_CATEGORY]: setLoadingCategoryReducer,
});
