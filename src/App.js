import { ContactCard } from "./components";
import React from "react";

import { grabContactList } from "./api";

import "./App.css";
import "index.css";

export class App extends React.Component {
  state = { contacts: [] };

  renderCards = () =>
    this.state.contacts.map(({ cell, email, name, picture }, index) => (
      <ContactCard
        cell={cell}
        email={email}
        name={name}
        picture={picture}
        key={index}
      />
    ));

  async componentDidMount() {
    const { results } = await grabContactList();
    this.setState({ contacts: results });
  }

  render() {
    return <main className="App">{this.renderCards()}</main>;
  }
}
