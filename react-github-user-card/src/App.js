import React from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Card";
// import FollowerMap from "./components/FollowerMap";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/djones36")
      .then(res => {
        console.log("user ", res.data);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });

    axios
      .get("https://api.github.com/users/djones36/followers")
      .then(res => {
        console.log("followers ", res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <Cards value={this.state.user} followerValue={this.state.followers} />
        {/* <FollowerMap followerValue={this.state.followers} /> */}
      </div>
    );
  }
}

export default App;
