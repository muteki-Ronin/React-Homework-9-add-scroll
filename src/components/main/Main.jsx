// CORE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Loader } from "../loader/Loader";
import { PhotoCard } from "../userItem/PhotoCard";
import { Error } from "../error/Error";
// ACTIONS
import {
  getPhotosAction,
  getPhotosScrollAction,
} from "../../store/actions/actions";
//SELECTORS
import {
  selectPhotos,
  selectPhotosError,
  selectPhotosIsLoading,
} from "../../store/selectors/selectors";
// STYLES
import { useStyle } from "./style";
// MUI
import { Grid } from "@mui/material";

export const Main = () => {
  const [page, setPage] = useState(1);
  const [getPage, setGetPage] = useState(true);
  const classes = useStyle();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const error = useSelector(selectPhotosError);
  const isLoading = useSelector(selectPhotosIsLoading);

  const handlerScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      photos.length < 5000
    ) {
      setGetPage(true);
    }
  };

  useEffect(() => {
    if (getPage) {
      dispatch(getPhotosScrollAction(page));
      setPage((prevState) => prevState + 1);
      setGetPage(false);
      console.log(page);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPage]);

  useEffect(() => {
    document.addEventListener("scroll", handlerScroll);
    return () => {
      document.removeEventListener("scroll", handlerScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPhotosAction());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <h2 className={classes.photosTitle}>PHOTOS:</h2>
          <Grid container spacing={2}>
            {photos.map((item) => (
              <PhotoCard key={item.id} item={item} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
