import React, { useReducer } from "react";
import axios from "axios";
import authContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    errors: null,
    user: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //   load useer
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  //   load useer return authState

  // register user
  const register = async formdata => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users", formdata, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.msg });
    }
  };
  // register user return authState

  // login user
  const login = async formdata => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/auth", formdata, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.msg });
    }
  };
  // login user return authState

  // logout user
  const logout = () => {
    console.log("logging out");
    dispatch({ type: LOGOUT });
  };
  // logout user return authState

  // clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  // clear errors return authState

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        errors: state.errors,
        user: state.user,
        register: register,
        clearErrors: clearErrors,
        loadUser: loadUser,
        login: login,
        logout: logout
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
