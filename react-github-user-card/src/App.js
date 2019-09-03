import React from "react";
import "./App.css";
import axios from "axios";
// import { axoisUser, axiosFollowers } from "./components/Axios";
import Cards from "./components/Card";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  componentDidMount() {
    this.dataUser();
    this.dataFollowers();
  }
  dataUser = () => {
    axios
      .get("https://api.github.com/users/djones36")
      .then(res => {
        console.log("user ", res.data);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  dataFollowers = () => {
    axios
      .get("https://api.github.com/users/djones36/followers")
      .then(res => {
        console.log("followers ", res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render(user, followers) {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="user">
          <h2>User's Profile</h2>
          <Cards value={this.state.user} />
        </div>
        <div className="followers">
          <h2>Follower's Profiles</h2>
          <Cards value={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
