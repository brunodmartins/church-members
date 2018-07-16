import React, { Component } from 'react';
import Axios from 'axios';
import loadingIcon from './loading.svg';
require("./loading.css");

class LoadingAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            child: null
        };
    }

    componentDidMount() {
        Axios.get(this.props.url)
            .then((res) => {
              this.setState({ child: this.props.onComplete(res), loading:false });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div className="loading-div"><img src={loadingIcon}/></div> : this.state.child}
            </div>
        );
    }

}

export default LoadingAPI;
