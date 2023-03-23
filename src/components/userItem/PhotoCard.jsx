// STYLES
import { useStyle } from "./style";
// MUI
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export const PhotoCard = ({ item }) => {
  const classes = useStyle();
  return (
    <Grid item xs={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.thumbnailUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photo №: {item.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
