import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/Contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authoContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authoContext;

  const contactContext = useContext(ContactContext);
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const userLinks = (
    <Fragment>
      <li> Hello,{user && user.user.name}</li>
      <li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">SignUp</Link>
      </li>
      <li>
        <Link to="/login">SignIn</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-dark">
      <h1>
        <a href="/">
          {" "}
          <i className={icon} /> {title}
        </a>
      </h1>
      <ul>{isAuthenticated ? userLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
