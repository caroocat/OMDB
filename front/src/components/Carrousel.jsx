import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Cine en casa",
    imgPath:
      "https://scontent.faep9-1.fna.fbcdn.net/v/t1.15752-9/88281250_217364269315542_29731468724928512_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=e798iOhyQD0AX8p_dgI&_nc_ht=scontent.faep9-1.fna&oh=4a84a56173b9086fee4424f10eaac796&oe=5EFBC5EB"
  },
  {
    label: "Usa el buscador para encontrar la peli de tu gusto!",
    imgPath:
      "https://scontent.faep9-1.fna.fbcdn.net/v/t1.15752-9/88059471_827880661018876_1403840782598668288_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=MLY9Lt-VWE0AX97p2hW&_nc_ht=scontent.faep9-1.fna&oh=c94ad06ab6034c5721d25439a27c37fd&oe=5F01112B"
  },
  {
    label: "Registrate en la pagina",
    imgPath:
      "https://scontent.faep9-2.fna.fbcdn.net/v/t1.15752-9/88423288_193566128404630_509374612975386624_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=lTaL-xFkMG0AX8PJvSv&_nc_ht=scontent.faep9-2.fna&oh=3ad35775017d807e6536e00492067836&oe=5EF1B884"
  },
  {
    label: "puedes loguear y desloguear cuando quieras",
    imgPath:
      "https://scontent.faep9-2.fna.fbcdn.net/v/t1.15752-9/87553177_508794159833556_6198157898602774528_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=O7mjjXF9Y1sAX8NtnF7&_nc_ht=scontent.faep9-2.fna&oh=93feb734900010c38e7dedbd1af09d1f&oe=5EF8A37C"
  },
  {
    label: "a disfrutar!",
    imgPath:
      "https://scontent.faep9-2.fna.fbcdn.net/v/t1.15752-9/89035963_647133589395206_1894414223480455168_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=niRp6MAWbGUAX-9eNwU&_nc_ht=scontent.faep9-2.fna&oh=b5e594d794a6d6f5f4d1953d7e1befbc&oe=5EF41575"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flex: 4
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    margin: 20,
    paddingLeft: theme.spacing(4),
    justifyContent: "center",
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 705,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  }
}));

function Movies() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography
          style={{
            fontFamily: "Homemade Apple",
            fontSize: 30
          }}
        >
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Movies;
