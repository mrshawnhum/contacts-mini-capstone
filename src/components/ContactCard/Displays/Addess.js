import PropTypes from "prop-types";
import React from "react";

export const Address = ({ results }) => {
  return (
    <div>
      <address></address>
    </div>
  );
};

Address.propTypes = {
  results: PropTypes.array,
};
