import PropTypes from "prop-types";
import React from "react";

export const Password = ({ results }) => {
  return (
    <div>
      <button type="button">Password</button>
      <p></p>
    </div>
  );
};

Password.propTypes = {
  results: PropTypes.array,
};
