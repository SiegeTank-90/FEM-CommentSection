import { render } from "@testing-library/react";
import React from "react"
import ReactDOM from "react-dom";
import NewReply from "../../createReply";


function ReplyAction(props) {
   


    return (
    <button className="replyButton" onClick={() => props.NewReplyButton()} >
    <img src="/images/icon-reply.svg"></img>
    <span className="textPrimaryBold m-1">Reply</span>
    </button>
      
    )}


export default ReplyAction;