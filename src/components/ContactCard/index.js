import PropTypes from "prop-types";
import React from "react";

import { Toggle } from "./Toggle";
import { Pic } from "./Pic";

import { getStateProxy } from "utils/";

import "./ContactCard.css";
import styles from "./ContactCard.module.css";

export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.object,
    picture: PropTypes.object,
  };

  state = {
    activeInfo: "cell",
  };

  stProxy = getStateProxy(this);

  infoToggles = [
    {
      icon: "mobile",
      info: "cell",
    },
    {
      icon: "envelope",
      info: "email",
    },
  ];

  renderInfoToggles() {
    return this.infoToggles.map(({ icon }) => (
      <Toggle key={icon} icon={icon} />
    ));
  }

  render() {
    return (
      <div>
        <Pic name={this.props.name} pic={this.props.picture} />
        <div className="ContactCard">{this.renderInfoToggles()}</div>
      </div>
    );
  }
}
