import React from "react";
import { ImgStyling, CardStyling, ListStyling } from "./Styling";
const FollowerList = props => {
  return (
    <CardStyling className="followers">
      <ListStyling className="followers-list">
        <li>
          <ImgStyling src={props.value.avatar_url} alt="avatar"></ImgStyling>
        </li>
        <li>{props.value.login}</li>
      </ListStyling>
    </CardStyling>
  );
};

export default FollowerList;
