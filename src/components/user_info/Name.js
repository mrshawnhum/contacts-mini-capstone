import PropTypes from "prop-types";
import React from "react";

export const Name = ({ results }) => {
  return results.map(({ name }, index) => {
    return (
      <div key={index}>
        <button type="button">Name</button>
        <p>Hello, My name is</p>
        <p>{name}</p>
      </div>
    );
  });
};

Name.propTypes = {
  results: PropTypes.array,
};
