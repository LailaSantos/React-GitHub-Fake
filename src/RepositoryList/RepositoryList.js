import React, { Component } from "react";
import axios from "axios";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import "../RepositoryList/RepositoryList.css";

class RepositoryList extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/orgs/reactjs/repos").then(response => {
      this.setState({ repos: response.data });
      // console.log(response.data);
    });
  }

  render() {
    const { repos } = this.state;
    return (
      <div className="container-list">
        {repos.map(rep => (
          <ul key={rep.id} className="lista">
            <RepositoryItem repo={rep.name} />
            <RepositoryItem repo={rep.description} />
          </ul>
        ))}
      </div>
    );
  }
}

export default RepositoryList;
