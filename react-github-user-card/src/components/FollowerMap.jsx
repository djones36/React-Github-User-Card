import React from "react";
import FollowerList from "./FollowerList";

const FollowerMap = props => {
  return (
    <div className="followers">
      <h2>Follower's Profiles</h2>
      {props.followerValue.map(data => (
        <FollowerList value={data} />
      ))}
    </div>
  );
};
export default FollowerMap;
