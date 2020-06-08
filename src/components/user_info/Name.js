import PropTypes from "prop-types";
import React from "react";

export const Name = ({ results }) => {
  return (
    <div>
      <button type="button">Name</button>
      <p></p>
    </div>
  );
};

Name.propTypes = {
  results: PropTypes.array,
};
