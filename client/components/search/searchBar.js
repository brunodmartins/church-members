import React, {useState} from 'react';
import InputText from 'components/InputText';
import Button from 'components/button';
require('./search.css');

const SearchBar = ({onSearch}) => {
	const [value, setValue] = useState('');

	const searchAllowed = (value) => {
		return value.length < 3;
	};

	return (
		<div className="div-search-bar">
			<InputText
				placeholder="Pesquisar"
				value={value}
				setValue={setValue}
				onEnter={() => {
					if(searchAllowed(value)) onSearch(value);
				}}/>
			<Button onClick={() => onSearch(value)} disabled={searchAllowed(value)} label='Pesquisar'/>
		</div>
	);
};
export default SearchBar;
