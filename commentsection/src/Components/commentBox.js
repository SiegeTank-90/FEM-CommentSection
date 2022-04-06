import React, { useState } from "react";
import VoteButton from "./Buttons/voteButton.js";
import ProfileSection from "./profileSection.js";
import ReplyAction from "./Buttons/replyAction.js";
import useWindowDimension from "./windowDemension";
import NewReplyBox from "../createReply";

function CommentBox(props) {
  function CreateNewReply() {
    setNewReply(
      <NewReplyBox
        currentUser={props.user}
        message={"Add A Comment . . ."}
        username={props.username}
        repliedUser={props.replingTo}
        Save={SaveNewReply}
      />
    );
  }

  // creates new ID and pushes comment into it
  function SaveNewReply(replyMessage) {
    
    let NewCommentId = props.idkeys.at(props.idkeys.length - 1) + 1;
    props.idkeys.push(NewCommentId);
    
    props.Array.push({
      id: NewCommentId,
      content: replyMessage,
      createdAt: "< a minute",
      score: 0,
      replyingTo: props.username,
      user: {
        image: {
          png: props.user.image.png
        },
        username: props.user.username
      }
    });
   
    props.Update();
    
    setNewReply("");
  }

  function deleteCommentConfirmation(id) {
    props.setIsModalVisible(true);
    props.setCommentIdKey(id);
   

  }

  function UpdateComment() {
    setCommentState(
      <NewReplyBox
        currentUser={props.user}
        message={props.content}
        username={props.username}
        repliedUser={props.replingTo}
        Save={EditedMessage}
      />
    );
  }

  function EditedMessage(updatedMesasge) {
    setCommentState(
      <CommentBox
        idkeys={props.idkeys}
        key={props.id}
        id={props.id}
        user={props.user}
        content={updatedMesasge}
        createdAt={props.createdAt}
        score={props.score}
        username={props.user.username}
        replyingTo={props.replyingTo}
        image={props.user.image.png}
        setIsModalVisible={props.setIsModalVisible}
        setCommentIdKey={props.setCommentIdKey}
        Array={props.replies}
        Update={props.Update}
      />
    );
  }

  const [NewReply, setNewReply] = useState("");

  // Store Elements into an array to pass into NewReply Function
  let deleteCommentButton = "hidden";
  let repliedUser = undefined;
  let updateButton = false;

  if (props.replyingTo != undefined) {
    repliedUser = "@" + props.replyingTo + " ";
  }

  if (props.user.username == props.username) {
    deleteCommentButton = "";
    updateButton = true;
  }

  const [CommentState, setCommentState] = useState(
    <div>
      <div className="mb-5">
        <div className="row justify-content-start ps-5">
          <div className="commentBox col-lg-12">
            <div className="row align-items-center">
              <div className="col-sm-1">
                <VoteButton votes={props.score} />
              </div>
              <div className="col-11 row justify-content-start mb-1">
                <div className="col-7">
                  <ProfileSection
                    image={props.image}
                    user={props.user}
                    username={props.username}
                    createdAt={props.createdAt}
                  />
                </div>
                <button
                  className={"col-3 delete " + deleteCommentButton}
                  onClick={() => deleteCommentConfirmation(props.id)}
                >
                  <span className="p-3">
                    <img className="p-1" src="./images/icon-delete.svg" />{" "}
                    Delete
                  </span>{" "}
                </button>
                <div className="col-2">
                  <ReplyAction
                    UpdateComment={UpdateComment}
                    NewReplyButton={CreateNewReply}
                    updateButton={updateButton}
                  />
                </div>
                <div>
                  <p className="textAlternate col-10">
                    <span className="repliedUser">{repliedUser}</span>
                    {props.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div>{CommentState}</div> <div>{NewReply}</div>
    </div>
  );
}

export default CommentBox;
