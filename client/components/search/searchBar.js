import React, {useState} from 'react';

require("./search.css");

const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('');
    return (
        <div className="div-search-bar">
            <input type="text" placeholder="Pesquisar" value={value} onChange={(e) => {
              if(e.which == 13 && value.length >= 3) {
                onSearch(value);
                return;
              }
              setValue(e.target.value);
            }}/>
            <button type="button" onClick={() => onSearch(value)} disabled={value.length < 3}>
              Pesquisar
            </button>
        </div>
  );
}
export default SearchBar;
