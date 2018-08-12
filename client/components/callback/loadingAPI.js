import React, { Component } from 'react';
import Axios from 'axios';
import loadingIcon from './loading.svg';
require("./loading.css");

const LoadingAPI = ({isLoading, children}) => {
    return (
        <div>
            {isLoading ? <div className="loading-div"><img src={loadingIcon}/></div> : children}
        </div>
    );
}

export default LoadingAPI;
