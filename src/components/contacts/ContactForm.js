import React, { useState, useEffect } from "react";
import ContactContext from "../../context/Contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {
    addContact,
    current,
    clearCurrent,
    updateContact,
    error
  } = contactContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(
    function() {
      if (error !== null) {
        setAlert(error, "danger");
      }

      if (current !== null) {
        setContact(current);
      } else {
        setContact({
          name: "",
          email: "",
          phone: "",
          type: "personal"
        });
      }
    },
    // eslint-disable-next-line
    [contactContext, current, error]
  );

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, contacttype } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {current === null ? (
          <h1>
            Add <span className="text-primary">Contact Form</span>
          </h1>
        ) : (
          <h1>
            Update <span className="text-primary">Contact Form</span>
          </h1>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          required
          autoComplete="off"
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={onChange}
        ></input>
        <h4>Contact type</h4>
        <input
          type="radio"
          name="contacttype"
          value="personal"
          checked={contacttype === "personal"}
          onChange={onChange}
        />
        Personal{" "}
        <input
          type="radio"
          name="contacttype"
          value="professional"
          checked={contacttype === "professional"}
          onChange={onChange}
        />
        Professional{" "}
        <div>
          <input
            type="submit"
            value={current === null ? "Add Contact" : "Update Contact"}
            className="btn btn-dark btn-block"
          />
        </div>
        {current && (
          <div style={{ marginTop: "5px" }}>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
