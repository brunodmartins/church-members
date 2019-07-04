import React from 'react';
import SearchBar from "./searchBar";
import LoadingAPI from "../callback/loadingAPI";
import MembersPanel from "../members/membersPanel/membersPanel";

const SearchInfo = ({members, onSearch, onMemberClick, isLoading}) => {

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <LoadingAPI isLoading={isLoading}>
                <MembersPanel members={members} onMemberClick={onMemberClick}/>
            </LoadingAPI>
        </div>
    );
};

export default SearchInfo;
