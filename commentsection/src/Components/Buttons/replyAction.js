import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import NewReply from "../../createReply";

function ReplyAction(props) {
  
    if (props.updateButton == true) {
    return (
      <button className="replyButton" onClick={() => props.UpdateComment()}>
        <img src="/images/icon-edit.svg"></img>
        <span className="textPrimaryBold m-2">Edit</span>
      </button>
    );
  }

  return (
    <button className="replyButton" onClick={() => props.NewReplyButton()}>
      <img src="/images/icon-reply.svg"></img>
      <span className="textPrimaryBold m-1">Reply</span>
    </button>
  );
}

export default ReplyAction;
