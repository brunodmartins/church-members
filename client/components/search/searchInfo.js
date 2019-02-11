import React from 'react';
import SearchBar from "./searchBar";
import MembersPanelUI from "../../containers/membersPanelUI";

const SearchInfo = ({members, onSearchTyped}) => {

    const renderMembers = () => {
        return members.map(m => {
            return (<li>{m.name}</li>);
        });

    };

    return (
        <div>
            <SearchBar onKeyUp={onSearchTyped}/>
            <ul>
                {renderMembers()}
            </ul>
        </div>
    );
};

export default SearchInfo;