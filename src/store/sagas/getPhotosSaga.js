// CORE
import { takeEvery, put } from "redux-saga/effects";
// STORE
import { store } from "../index";
// ACTIONS
import {
  setPhotosAction,
  setPhotosScrollAction,
  setPhotosActionError,
} from "../actions/actions";
// CONSTS
import { GET_PHOTOS, GET_PHOTOS_SCROLL } from "../consts/consts";
// API
import { getPhotosAPI } from "../../api";

function* setPhotoScrollWork() {
  const pageNumber = store.getState().photosReducer.pageNumber;
  try {
    const data = yield getPhotosAPI(pageNumber);
    yield put(setPhotosScrollAction(data));
  } catch {
    yield put(setPhotosActionError("ERROR DATA PHOTOS!!!"));
  }
}

function* setPhotosWork() {
  try {
    const data = yield getPhotosAPI();
    yield put(setPhotosAction(data));
  } catch {
    yield put(setPhotosActionError("ERROR DATA PHOTOS!!!"));
  }
}

export function* getPhotoScrollWatch() {
  yield takeEvery(GET_PHOTOS_SCROLL, setPhotoScrollWork);
}

export function* getPhotosWatch() {
  yield takeEvery(GET_PHOTOS, setPhotosWork);
}
