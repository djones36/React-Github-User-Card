import React from "react";
//render of card from props
const Cards = props => {
  return (
    <div className="card-wrapper">
      <img></img>
      <div className="cardInfo">
        <h3>Name</h3>
        <h4>UserName</h4>
        <p>Location</p>
        <p>followers</p>
        <p>following</p>
        <p>Bio</p>
      </div>
    </div>
  );
};
export default Cards;
