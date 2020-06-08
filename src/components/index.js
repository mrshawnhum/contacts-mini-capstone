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
  state = {};

  render() {
    return (
      <main>
        <div className="columns is-vcentered">
          <Name />
          <Address />
          <Birthday />
          <Email />
          <Password />
          <PhoneNumber />
        </div>
      </main>
    );
  }
}
