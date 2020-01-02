import React, { Component } from "react";
import axios from "axios";
import "../Header/Header.css";

class Header extends Component{

state = {
  data: {}
};

componentDidMount(){
axios.get("https://api.github.com/orgs/reactjs").then(response => {
  this.setState({ data: response.data});
  // console.log(response.data)
 });
}


render() {
  const { data } = this.state;
    return (
      <div className="container">
       <img src={data.avatar_url} alt="logo" className="imagem"/> 
        <div className="titles">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        </div>
      </div>
    );
  }
}

export default Header;