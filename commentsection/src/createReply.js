import React, { useState } from "react";
import useWindowDimensions from "./Components/windowDemension";

function NewReply(props) {
  const [ReplyMessage, SetReplyMessage] = useState(props.message);

  console.log('Inside New Reply', props.currentUser )

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
          <img className="replyProfileimg" alt = "profile Img" src={props.user.image.png} />
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
        <img className="replyProfileimg" alt = "profile Img"  src={props.user.image.png} />
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
