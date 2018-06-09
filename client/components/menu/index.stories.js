import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from './menu';
import { BrowserRouter as Router } from "react-router-dom";


storiesOf("Menu", module).add("default", () => {
  return <Router>
    <Menu />
  </Router>;
});
