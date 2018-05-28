import React from "react";
import { storiesOf } from "@storybook/react";
import MemberCard from "./memberCard/memberCard";

storiesOf("Members", module).add("card", () => (
  <MemberCard name="Bruno" completeName="Bruno Damasceno Martins" />
));
