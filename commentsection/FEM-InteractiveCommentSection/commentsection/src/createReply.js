import React, { useState } from "react";
import { ReplyAction } from "./Components/Buttons/replyAction";

function NewReply(props) {


 const [ReplyMessage, SetReplyMessage] = useState("@" + props.replyTo)

  const handleChange = (event) => {
     SetReplyMessage(event.target.value)
     
  }
 

  return (
    <div className="mb-5">
        <img className="profileimg" src={props.currentUser.image.png}/>
        <input type="text" name="Message" className="replyContentBox" value={ReplyMessage} onChange={handleChange}/>
        <button onClick={() => props.Save()}>Send</button>
    </div>
  );
}

export default NewReply;
