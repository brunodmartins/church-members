import React from 'react';
require('./memberInfo.css');

const AddressInfo = ({logradouro, numero, bairro}) => {
    
    return (
        <div className="member-info-panel">
            <div className="member-info-box">
              <h3>Endereço</h3>

            <div>
                <label>Logradouro</label>
                <span>{logradouro}</span>
            </div>

            <div>
                <label>Número</label>
                <span>{numero}</span>
            </div>

            <div>
                <label>Bairro</label>
                <span>{bairro}</span>
            </div>
            </div>
      </div>
    );
}
export default AddressInfo;