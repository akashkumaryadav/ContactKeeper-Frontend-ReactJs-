import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/Contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, contacttype } = contact;
  const onDelete = e => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className="card bg-dark">
      <h2 className=" text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (contacttype === "personal" ? "badge-success" : "badge-primary")
          }
        >
          {contacttype.charAt(0).toUpperCase() + contacttype.slice(1)}
        </span>
      </h2>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"> {phone}</i>
          </li>
        )}
        <p>
          <button
            className="btn btn-light btn-md"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-md" onClick={onDelete}>
            Delete
          </button>
        </p>
      </ul>
    </div>
  );
};

ContactItem.propTypes = { contact: PropTypes.object.isRequired };

export default ContactItem;
