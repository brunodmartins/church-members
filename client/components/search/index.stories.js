import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from './searchBar';
import SearchInfo from "./searchInfo";

storiesOf("Search", module)
    .add("Bar", () => {
    return <SearchBar onKeyUp={(e) => console.log(e.target.value)}/>;
    })
    .add("Painel", () => {
        const members = ["Bruno", "Teste"];
        return <SearchInfo members ={members} onSearchTyped={(e) => console.log(e.target.value)}/>;
    });
