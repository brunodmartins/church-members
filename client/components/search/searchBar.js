import React from 'react';

require("./search.css");

const SearchBar = ({onKeyUp}) => {
    return (
        <div className="div-search-bar">
            <input type="text" placeholder="Pesquisar" onKeyUp={onKeyUp}/>
    </div>);
}
export default SearchBar;