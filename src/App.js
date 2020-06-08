import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { components as Info } from "./components";

export const App = () => {
  return (
    <div>
      <h1 className="title">Contact Book!</h1>
      <Info />
    </div>
  );
};
