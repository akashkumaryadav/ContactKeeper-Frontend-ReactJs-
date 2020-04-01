import React, { Fragment } from "react";
import spinner from "./sp.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        style={{
          width: "150px",
          margin: "10% 35% 10% 35%",
          display: "block",
          height: "150px"
        }}
        src={spinner}
        alt="loading..."
      />
    </Fragment>
  );
};
export default Spinner;
