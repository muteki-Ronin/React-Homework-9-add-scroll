// COMPONENTS
import { Main } from "../components/main/Main";
// STYLES
import { useStyle } from "./style";
// MUI
import { Container } from "@mui/material";

export const App = () => {
  const classes = useStyle();

  return (
    <Container maxWidth="lg">
      <h1 className={classes.headerTitle}>SAGA PAGE</h1>
      <Main />
    </Container>
  );
};
