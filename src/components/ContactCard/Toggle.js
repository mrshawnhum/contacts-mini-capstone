import PropTypes from "prop-types";
import React from "react";

import "font-awesome/css/font-awesome.min.css";

export const Toggle = ({ icon }) => <span className={`fa fa-${icon}`} />;
Toggle.propTypes = {
  icon: PropTypes.string.isRequired,
};
