import {takeLatest, all, takeEvery} from 'redux-saga/effects';

/* ------------- Types ------------- */
import Api from '../Services/Api';

import {StartupTypes} from '../Redux/StartupRedux';
import {CategoryTypes} from '../Redux/CategoryRedux';
import {CouponTypes} from '../Redux/CouponRedux';

import {startup} from './StartupSagas';
import {getDataCategory, getDataCoupon} from './CategorySagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = Api.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(CategoryTypes.SET_CATEGORY_REQ, getDataCategory, api),
    takeLatest(CouponTypes.SET_COUPON_REQ, getDataCoupon, api),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(SampleTypes.SAMPLE_REQUEST, SampleAction)
  ]);
}
