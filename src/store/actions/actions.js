// CONSTS
import {
  GET_PHOTOS,
  SET_PHOTOS,
  GET_PHOTOS_SCROLL,
  SET_PHOTOS_SCROLL,
  SET_PHOTOS_ERROR,
} from "../consts/consts";

export const getPhotosAction = () => ({
  type: GET_PHOTOS,
});

export const setPhotosAction = (payload) => ({
  type: SET_PHOTOS,
  payload,
});

export const getPhotosScrollAction = (payload) => ({
  type: GET_PHOTOS_SCROLL,
  payload,
});

export const setPhotosScrollAction = (payload) => ({
  type: SET_PHOTOS_SCROLL,
  payload,
});

export const setPhotosActionError = (payload) => ({
  type: SET_PHOTOS_ERROR,
  payload,
});
