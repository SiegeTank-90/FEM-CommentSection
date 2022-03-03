import React, { useState } from "react";
import ReactDOM from "react-dom"
import ReplyAction from "./replyAction";





function VoteButton(props) {

  let [ vote, setVote] = useState(props.votes)
  const [startingVote, setStartingVote] = useState(vote)
 
  function OneVote(math) {

    vote = vote + math

    if (vote <= startingVote + 1 && vote >= startingVote-1 )   {
      return (setVote(vote))
    } else if (vote >= startingVote+2) {
      vote--
    } else if (vote <= startingVote-2 ) {
      vote++
    }
 }    
    
    
  return (
    <div className="voteButton voteButtonAlt">
      <button onClick={() => OneVote(+1)}>
        <img className="test" src="./images/icon-plus.svg" ></img>
      </button>
      <p className="voteCounter textPrimaryBold">{vote}</p>
      <button onClick={() => OneVote(-1)}  >
        <img src="./images/icon-minus.svg"></img>{" "}
      </button>
    </div>
  );
}

export default VoteButton;
