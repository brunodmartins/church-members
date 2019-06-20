import React, {useState} from 'react';
import InputText from 'components/InputText';

require("./search.css");

const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('');

    const searchAllowed = (value) => {
      return value.length < 3;
    }
    
    return (
        <div className="div-search-bar">
            <InputText
              placeholder="Pesquisar"
              value={value}
              setValue={setValue}
              onEnter={() => {
                if(searchAllowed(value)) onSearch(value)
              }}/>
            <button type="button" onClick={() => onSearch(value)} disabled={searchAllowed(value)}>
              Pesquisar
            </button>
        </div>
  );
}
export default SearchBar;
