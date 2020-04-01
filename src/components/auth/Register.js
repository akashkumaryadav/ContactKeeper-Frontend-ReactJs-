import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const [user, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { register, clearErrors, errors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (errors === "User already exists") {
      setAlert(errors, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [errors, isAuthenticated, props.history]);

  const onChange = e => {
    e.preventDefault();
    setState({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("User Registered");
    if (password !== password2) {
      setAlert("password doesnot match", "danger");
    } else {
      register({ name: name, email: email, password: password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form className="form-group" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          minLength="4"
          autoComplete="false"
        />
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          required
          minLength="4"
          autoComplete="false"
        />
        <br />
        <button className="btn btn-block btn-dark">Register</button>
      </form>
    </div>
  );
};

export default Register;
