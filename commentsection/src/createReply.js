import React, { useState } from "react";
import { ReplyAction } from "./Components/Buttons/replyAction";
import useWindowDimensions from "./Components/windowDemension";

function NewReply(props) {
  const [ReplyMessage, SetReplyMessage] = useState(props.message);

  const handleChange = (event) => {
    SetReplyMessage(event.target.value);
  };
  let window = useWindowDimensions().width;
  if (window < 1069) {
    return (
      <div className="ps-5">
        <div className="replyBox mb-5">
          <textarea
            type="text"
            maxLength="256"
            name="Message"
            className="replyContentBox"
            value={ReplyMessage}
            onChange={handleChange}
          />
          <img className="replyProfileimg" src={props.currentUser.image.png} />
          <button
            className="bigReplyButton"
            onClick={() => props.Save(ReplyMessage)}
          >
            SEND
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="ps-5">
      <div className="replyBox mb-5">
        <img className="replyProfileimg" src={props.currentUser.image.png} />
        <textarea
          type="text"
          maxLength="256"
          name="Message"
          className="replyContentBox"
          value={ReplyMessage}
          onChange={handleChange}
        />
        <button
          className="bigReplyButton"
          onClick={() => props.Save(ReplyMessage)}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default NewReply;
