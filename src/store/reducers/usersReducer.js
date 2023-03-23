// CONSTS
import {
  SET_PHOTOS,
  GET_PHOTOS_SCROLL,
  SET_PHOTOS_SCROLL,
  SET_PHOTOS_ERROR,
} from "../consts/consts";

const initialState = {
  photos: [],
  error: null,
  isLoading: true,
  pageNumber: 2,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
        isLoading: false,
      };
    case GET_PHOTOS_SCROLL:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case SET_PHOTOS_SCROLL:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        isLoading: false,
      };
    case SET_PHOTOS_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
