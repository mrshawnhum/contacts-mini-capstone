import PropTypes from "prop-types";
import React from "react";

import { Toggle } from "./Toggle";
import { Pic } from "./Pic";

export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    dob: PropTypes.object,
    email: PropTypes.string,
    location: PropTypes.object,
    name: PropTypes.object,
    picture: PropTypes.object,
  };

  infoToggles = [
    {
      icon: "mobile",
    },
    {
      icon: "envelope",
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
