import React, { useState } from "react";
import VoteButton from "./Buttons/voteButton.js";
import ProfileSection from "./profileSection.js";
import ReplyAction from "./Buttons/replyAction.js";
import useWindowDimension from "./windowDemension";
import NewReplyBox from "../createReply";



function CommentBox(props) {

 
  function CreateNewReply(userReply) {
    [username, currentUser, SaveNewReply] = userReply
   setNewReply(<NewReplyBox currentUser={currentUser} replyTo={username} Save={() => SaveNewReply()} />);

  }

  function SaveNewReply(props) {
    
      setNewReply(<CommentBox currentUser={currentUser} image={currentUser.image.png} username={currentUser.username} createdAt={"Today"} score={0} />);
  }


  
  const [NewReply, setNewReply] = useState("");
  

    // Store Elements into an array to pass into NewReply Function
  let username = props.username
  let currentUser = props.user
  let deleteComment = "hidden"
  let userReply = [username, currentUser , SaveNewReply];

  // if ( currentUser.username == props.username) {
  //     deleteComment = ""
  // }


  let window = useWindowDimension().width;
  if (window < 769) {
    return (
      <div>
        <div className="mb-5">
          <div className="commentBoxAlt ps-5">
            <div className="row col-12">
              <ProfileSection
                image={props.image}
                username={props.username}
                createdAt={props.createdAt}
              />
              <p className="textAlternate">{props.content}</p>
            </div>

            <div className="row col-12 position-relative">
              <div className="col-9">
                <VoteButton votes={props.score} />
              </div>
              <div className="col-3">
                <ReplyAction
                  NewReplyButton={() => CreateNewReply(userReply)}
                />
              </div>
            </div>
          </div>
        </div>
        {NewReply}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5">
        <div className="row justify-content-start ps-5">
          <div className="commentBox col-lg-12">
            <div className="row align-items-center">
              <div className="col-sm-1">
                <VoteButton votes={props.score} />
              </div>
              <div className="col-11 row justify-content-start mb-1">
                <div className="col-8">
                <ProfileSection
                  image={props.image}
                  username={props.username}
                  createdAt={props.createdAt}
                />
                </div>
                <button className={"col-2 " + deleteComment}>Delete</button>
                <div className="col-2">
                  <ReplyAction
                    NewReplyButton={() => CreateNewReply(userReply)}
                  />
                </div>
                <div>
                  <p className="textAlternate col-10">{props.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {NewReply}
    </div>
  );
}

export default CommentBox;
