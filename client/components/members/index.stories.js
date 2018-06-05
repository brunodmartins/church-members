import React from "react";
import { storiesOf } from "@storybook/react";
import MemberCard from "./memberCard/memberCard";
import MembersPanel from "./membersPanel/membersPanel";


const MEMBERS = [
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
  {name:"Bruno", completeName:"Bruno Damasceno Martins"},
];

storiesOf("Members", module)
  .add("card", () => (
    <MemberCard name="Bruno" completeName="Bruno Damasceno Martins" />
  ))
  .add("Panel", () => (
  <MembersPanel members={MEMBERS} />
));
