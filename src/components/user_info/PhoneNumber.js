import PropTypes from "prop-types";
import React from "react";

export const PhoneNumber = ({ results }) => {
  return (
    <div>
      <button type="button">Phone Number</button>
      <p></p>
    </div>
  );
};

PhoneNumber.propTypes = {
  results: PropTypes.array,
};
