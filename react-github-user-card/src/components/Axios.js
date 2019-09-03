import React from "react";
import axios from "axios";
//function to call date export to app for prop generation

export const axiosUser = () => {
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

export const axiosFollowers = () => {
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
