import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import { Address } from "./user_info";
import { Birthday } from "./user_info";
import { Email } from "./user_info";
import { Name } from "./user_info";
import { Password } from "./user_info";
import { PhoneNumber } from "./user_info";

import { grabRandomUsers } from "api";

export class components extends React.Component {
  state = {
    Address: false,
    Birthday: false,
    Email: false,
    Name: true,
    Password: false,
    PhoneNumber: false,
    results: [],
  };

  async componentDidMount() {
    try {
      const resp = await fetch("https://randomuser.me/api")
        .then((resp) => resp.json())
        .then((data) => data.results[0])
        .then((x) => this.setState({ results: x.name }));
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <main>
        <div className="columns is-vcentered">
          {this.state.results.first}
          {/* <Name />
          <Address />
          <Birthday />
          <Email />
          <Password />
          <PhoneNumber /> */}
        </div>
      </main>
    );
  }
}
