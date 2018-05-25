import React, { Component} from "react";
import "./App.css";
import Axios from 'axios';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      msg: "Pinggg..."
    }
  }

  componentDidMount(){
    Axios.get("https://disciples-api.herokuapp.com/ping")
      .then(res => {
        this.setState({
          msg: "Pinged!"
        });
      })
      .catch(err => {
        this.setState({
          msg: "Not pinged"
        });
      });
  }

  render(){
    return(
      <div className="App">
        <h1> {this.state.msg} </h1>
      </div>
    );
  }
}

export default App;
