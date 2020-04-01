import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/Contact/ContactState";
import AlertState from "./context/alert/AlertState";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Route>
                <Navbar />
                <div style={{ marginTop: "40px" }} className="container">
                  <Alert />
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/"
                      component={Home}
                    ></PrivateRoute>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/login" component={Login}></Route>
                  </Switch>
                </div>
              </Route>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
