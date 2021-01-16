import React from 'react';

require('./inputText.css')

const InputText = ({value, setValue, placeholder, onEnter}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={(e) => {
        if(e.which == 13 && onEnter) {
          onEnter();
        }
      }}
      className="inputText"
    />
  );
}

export default InputText;
