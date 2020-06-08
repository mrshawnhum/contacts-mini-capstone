import PropTypes from "prop-types";
import React from "react";

export const Birthday = ({ results }) => {
  return (
    <div>
      <button type="button">Birthday</button>
      <p></p>
    </div>
  );
};

Birthday.propTypes = {
  results: PropTypes.array,
};
