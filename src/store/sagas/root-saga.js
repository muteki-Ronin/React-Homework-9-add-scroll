// CORE
import { all } from "redux-saga/effects";
// SAGAS
import { getPhotosWatch, getPhotoScrollWatch } from "./getPhotosSaga";

export function* rootSaga() {
  yield all([getPhotosWatch(), getPhotoScrollWatch()]);
}
