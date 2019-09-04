import React from "react";
import { ImgStyling, FollowerStyling, ListStyling, ListItem } from "./Styling";
const FollowerList = props => {
  return (
    <FollowerStyling className="followers">
      <ListStyling className="followers-list">
        <li>
          <ImgStyling src={props.value.avatar_url} alt="avatar"></ImgStyling>
        </li>
        <ListItem>{props.value.login}</ListItem>
      </ListStyling>
    </FollowerStyling>
  );
};

export default FollowerList;
