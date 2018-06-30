import React, { Component } from 'react';
import Axios from 'axios';

class LoadingAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            child: null 
        }
    }

    componentDidMount() {
        Axios.get(this.props.url)
            .then((res) => {
                this.setState({ child: this.props.onComplete(res), loading:false })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                {this.state.loading ? "Loading" : this.state.child}
            </div>
        )
    }

}

export default LoadingAPI;