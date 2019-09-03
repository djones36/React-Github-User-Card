import React from "react";
import Cards from "./Card";

const FollowerCard = props => {
  return (
    <div className="followers">
      <h2>Follower's Profiles</h2>
      {props.followerValue.map(data => (
        <Cards value={data} />
      ))}
    </div>
  );
};
export default FollowerCard;
