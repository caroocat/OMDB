import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Carrousel from "./Carrousel";
import Navbar from "./Navbar";
import Movies from "../containers/Movies";
import Movie from "../containers/Movie";
import Register from "../containers/Register";
import Logging from "../containers/Logging";
export default () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Navbar style={{ flex: 1 }} />
    <div style={{ flex: 4 }}>
      <Switch>
        <Route path="/" exact component={Carrousel} />
        <Route path="/Movies" exact component={Movies} />
        <Route path="/Movies/:id" component={Movie} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Logging" component={Logging} />
      </Switch>
    </div>
    <div
      style={{
        flex: 0.3,
        backgroundColor: "#FF5A5F",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        display: "block"
      }}
    ></div>
  </div>
);
