import PropTypes from "prop-types";
import React from "react";

export const Address = ({ results }) => {
  return (
    <div>
      <button type="button">Address</button>
      <p></p>
    </div>
  );
};

Address.propTypes = {
  results: PropTypes.array,
};
