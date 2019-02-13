import React from 'react';
import SearchBar from "./searchBar";
import LoadingAPI from "../callback/loadingAPI";
import MembersPanel from "../members/membersPanel/membersPanel";

const SearchInfo = ({members, onSearchTyped, onMemberClick, isLoading}) => {

    return (
        <div>
            <SearchBar onKeyUp={onSearchTyped}/>
            <LoadingAPI isLoading={isLoading}>
                <MembersPanel members={members} onMemberClick={onMemberClick}/>
            </LoadingAPI>
        </div>
    );
};

export default SearchInfo;