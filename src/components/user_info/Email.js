import PropTypes from "prop-types";
import React from "react";

export const Email = ({ results }) => {
  return (
    <div>
      <button type="button">Email</button>
      <p></p>
    </div>
  );
};

Email.propTypes = {
  results: PropTypes.array,
};
