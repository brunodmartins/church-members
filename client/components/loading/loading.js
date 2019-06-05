import React from 'react';
import loadingIcon from './loading.svg';
require('./styles.css');


const Loading = () => {
    return <div className="loading-div"><img src={loadingIcon}/></div>
}

export default Loading;