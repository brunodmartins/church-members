import React from 'react';
import SearchBar from "./searchBar";
import LoadingAPI from "../callback/loadingAPI";
import MembersPanel from "../members/membersPanel/membersPanel";

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
                <MembersPanel members={members} onMemberClick={(e) => console.log(e)}/>
            </LoadingAPI>
        </div>
    );
};

export default SearchInfo;