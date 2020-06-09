import PropTypes from "prop-types";
import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./Toggle.css";
import styles from "./Toggle.module.css";

export class Toggle extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    info: PropTypes.string,
    stProxy: PropTypes.object,
  };

  handleClick = () => {
    this.props.stProxy.activeInfo = this.props.info;
  };

  render() {
    const className =
      this.props.stProxy.activeInfo === this.props.info
        ? `Toggle fa fa-${this.props.icon} ${styles.active}`
        : `Toggle fa fa-${this.props.icon}`;

    return <span className={className} onClick={this.handleClick} />;
  }
}
