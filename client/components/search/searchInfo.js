import React from 'react';
import SearchBar from "./searchBar";
import MembersPanelUI from "../../containers/membersPanelUI";
import LoadingAPI from "../callback/loadingAPI";

const SearchInfo = ({members, onSearchTyped, isLoading}) => {

    const renderMembers = () => {
        return members.map(m => {
            return (<li>{m.name}</li>);
        });

    };

    return (
        <div>
            <SearchBar onKeyUp={onSearchTyped}/>
            <LoadingAPI isLoading={isLoading}>
                <ul>
                    {renderMembers()}
                </ul>
            </LoadingAPI>
        </div>
    );
};

export default SearchInfo;