import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { getMovie } from "../store/actions/search";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    maxWidth: 700
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const {
    Title,
    Year,
    imdbID,
    Poster,
    Plot,
    Genre,
    Runtime,
    Director,
    Actors
  } = props.info;
  console.log(Title, Year, imdbID, Poster);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {Title ? Title[0] : "S"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Title}
        subheader={Year}
      />
      <CardMedia className={classes.media} image={Poster} title="Paella dish" />
      <CardContent style={{ overflow: "auto" }}>
        <Typography component="h6" variant="h6">
          {`Plot :${Plot}`}
        </Typography>
        <Typography component="h6" variant="h6">
          {`Genre :${Genre}`}
        </Typography>
        <Typography component="h6" variant="h6">
          {`Runtime :${Runtime}`}
        </Typography>
        <Typography component="h6" variant="h6">
          {`Director :${Director}`}
        </Typography>
        <Typography component="h6" variant="h6">
          {`Actors :${Actors}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
