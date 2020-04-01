import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = props => {
  const [user, setState] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, errors, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (errors === "invalid credentials") {
      setAlert(errors, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, errors, props.history]);

  const onChange = e => {
    e.preventDefault();
    setState({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email: email, password: password });
    console.log("Logged in");
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form className="form-group" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
          autoComplete="true"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          autoComplete="true"
        />
        <br />
        <button type="submit" className="btn btn-block btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
