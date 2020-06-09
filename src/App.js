import { ContactCard } from "./components";
import React from "react";
import bulma from "react-bulma-components";

import { grabContactList } from "./api";

import "./App.css";

export class App extends React.Component {
  state = { contacts: [] };

  renderCards = () =>
    this.state.contacts.map(
      ({ cell, dob, email, location, name, picture }, index) => (
        <ContactCard
          cell={cell}
          dob={dob}
          email={email}
          location={location}
          name={name}
          picture={picture}
          key={index}
        />
      )
    );

  async componentDidMount() {
    const { results } = await grabContactList();
    this.setState({ contacts: results });
  }

  render() {
    return this.renderCards();
  }
}
