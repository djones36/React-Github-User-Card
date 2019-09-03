import React from "react";

const FollowerList = props => {
  return (
    <div className="followers">
      <ul className="followers-list">
        <li>
          <img src={props.value.avatar_url} alt="avatar"></img>
        </li>
        <li>{props.value.login}</li>
      </ul>
    </div>
  );
};

export default FollowerList;
