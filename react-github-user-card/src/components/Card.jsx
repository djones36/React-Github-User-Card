import React from "react";
//render of card from props
const Cards = props => {
  return (
    <div className="card-wrapper">
      <img src={props.value.avatar_url} alt="avatar"></img>
      <div className="cardInfo">
        <h3>Name: {props.value.name}</h3>
        <p>UserName: {props.value.login}</p>
        <p>Location: {props.value.location}</p>
        <p>Followers: {props.value.followers}</p>
        <p>Following: {props.value.following}</p>
        <p>Bio: {props.value.bio}</p>
      </div>
    </div>
  );
};
export default Cards;
