import React from "react";
import FollowerList from "./FollowerList";
import { FollowerStyle } from "./Styling";

const FollowerMap = props => {
  return (
    <FollowerStyle className="followers">
      <h2>Follower's Profiles</h2>
      {props.followerValue.map(data => (
        <FollowerList value={data} />
      ))}
    </FollowerStyle>
  );
};
export default FollowerMap;
