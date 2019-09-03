import React from "react";
import "./App.css";
import { axoisUser, axiosFollowers } from "./components/Axios";
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
    this.axoisUser();
    this.axiosFollowers();
  }
  render(user, followers) {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="user">
          <Cards value={this.state.user} />
        </div>
        <div className="followers">
          <Cards value={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
