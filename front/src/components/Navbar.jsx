import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { searchMovies, getRegister, getLogging } from "../store/actions/search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../store/actions/users";
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.2)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function Navbar(props) {
  const user = useSelector(state => state.user.user);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#FF5A5F" }} position="static">
        <Toolbar>
          <Typography
            onClick={() => history.push("/")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Peliculas carocat
          </Typography>

          {!user ? (
            <div style={{ display: "flex" }}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={event => setSearch(event.target.value)}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    history.push("/Movies");
                    dispatch(searchMovies(search));
                  }}
                >
                  <h3>Search</h3>
                </button>
              </div>

              <button
                onClick={() => {
                  history.push("/Register");
                }}
              >
                <h3>Register</h3>
              </button>

              <button
                onClick={() => {
                  history.push("/Logging");
                }}
              >
                <h3>Logging</h3>
              </button>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "30vw" }}>
                <h3>{`${user}`}</h3>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={event => setSearch(event.target.value)}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <button
                onClick={() => {
                  history.push("/Movies");
                  dispatch(searchMovies(search));
                }}
              >
                <h3>Search</h3>
              </button>

              <button onClick={() => dispatch(logOutUser({ user, history }))}>
                <h3>Logout</h3>
              </button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
