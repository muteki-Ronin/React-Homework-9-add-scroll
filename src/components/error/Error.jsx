// STYLES
import { useStyle } from "./style";

export const Error = ({ error }) => {
  const classes = useStyle();
  return <p className={classes.error}>{error}</p>;
};
