import axios from "axios";

export const createUser = info => dispatch => {
  const { email, password, history } = info;

  axios
    .post("http://localhost:3000/users", {
      email: email,
      password: password
    })
    .then(response => {
      history.push(`/logging`);
    })

    .catch(err =>
      console.log(
        err,
        "VERIFICAR SI EL USUARIO YA ESTA VERIFICADO O CONTENIDO INVALIDO"
      )
    );
};

export const loggingUser = info => dispatch => {
  const { email, password, history } = info;

  axios
    .post("http://localhost:3000/logging", {
      email: email,
      password: password
    })
    .then(response => {
      const data = response.config.data;
      const parsed = JSON.parse(data);
      console.log(response);
      dispatch({ type: "USER_DATA", payload: parsed.email });

      history.push(`/`);
      console.log(parsed.email);
    })
    .catch(err => console.log(err, "NO EXISTE O PASSWORD INCORRECTO"));
};

export const logOutUser = info => dispatch => {
  const { email, history } = info;
  axios
    .post("http://localhost:3000/logout", {
      email: email
    })
    .then(response => {
      dispatch({ type: "USER_DATA", payload: false });
      history.push(`/`);
    })
    .catch(err => console.log(err, "EL USUARIO NO PUDO SER DESLOGUEADO"));
};
