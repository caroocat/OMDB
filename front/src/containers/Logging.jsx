import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { loggingUser } from "../store/actions/users";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center"
  }
}));

export default function InputWithIcon() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={event => setEmail(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        onChange={event => setPassword(event.target.value)}
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <button
        onClick={() => dispatch(loggingUser({ email, password, history }))}
      >
        <h3>Entrar</h3>
      </button>
    </div>
  );
}
