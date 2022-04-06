import React from "react";
import ReplyAction from "./Buttons/replyAction";

function ProfileSection(props) {

  let You = ""

  if (props.user.username != props.username) {
    You = "hidden"
  }
 
  return (
    <div className="col-10 row">
      <div className=" col-sm-1 col-md-2 col-lg-1">
        <img className="profileimg" src={props.image}></img>
      </div>
      <div className="col-10">
        <span className="textPrimaryBold pe-2">{props.username}</span>
        <span className={"me-2 self " + You} >You</span>
        <span className="textAlternateBold">{props.createdAt}</span>
      </div>
     </div>
  );
}

export default ProfileSection;
