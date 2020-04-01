import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/Contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          ref={text}
          placeholder="Filter Contact..."
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
