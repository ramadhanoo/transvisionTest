import {put, call, select} from 'redux-saga/effects';
import CouponActions from '../Redux/CouponRedux';
import CategoryActions, {CategorySelectors} from '../Redux/CategoryRedux';
import {filterData} from '../Screens/Home/Home.mapper';

export function* getDataCategory(api, {payload}) {
  try {
    yield put(
      CategoryActions.setLoadingCategory({
        loading: true,
        error: false,
        actionType: payload.actionType,
      }),
    );
    yield put(
      CouponActions.setLoadingCoupon({
        loading: true,
        error: false,
        actionType: payload.actionType,
      }),
    );
    var response = yield call(api.getCategoryApi, payload);
    const {ok, data, status} = response;
    if (ok && status === 200) {
      yield put(
        CouponActions.setCouponReq({
          actionType: 'load',
          dataCategory: data?.result ?? [],
        }),
      );
      yield put(
        CategoryActions.succesFetchCategory({
          data: data.result,
          actionType: payload.actionType,
        }),
      );
    } else {
      yield put(CategoryActions.errorFetchCategory({message: 'error'}));
    }
  } catch (err) {
    console.log('error getDataCategory');
    yield put(CategoryActions.errorFetchCategory({message: 'error'}));
  }
}

export function* getDataCoupon(api, {payload}) {
  try {
    var response = yield call(api.getCouponApi, payload);
    const {ok, data, status} = response;
    if (ok && status === 200) {
      if (data.result.length !== 0) {
        var newData = filterData(
          data.result,
          payload.dataCategory[0]?.categoryId ?? '00',
        );
        yield put(
          CouponActions.setFilteredData({
            filtredData: newData,
            activeTab: payload.dataCategory[0]?.categoryId ?? '00',
          }),
        );
      }
      yield put(
        CouponActions.succesFetchCoupon({
          data: data.result,
          actionType: payload.actionType,
        }),
      );
    } else {
      yield put(CouponActions.errorFetchCoupon({message: 'error'}));
    }
  } catch (err) {
    console.log('error getDataCoupon');
    yield put(CouponActions.errorFetchCoupon({message: 'error'}));
  }
}
