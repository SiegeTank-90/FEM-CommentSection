import React, { useState } from "react";
import VoteButton from "./Buttons/voteButton.js";
import ProfileSection from "./profileSection.js";
import ReplyAction from "./Buttons/replyAction.js";
import NewReplyBox from "../createReply";

function CommentBox(props) {
  function CreateNewReply(userReply) {
    [username, currentUser, SaveNewReply] = userReply;

    setNewReply(
      <NewReplyBox
        currentUser={currentUser}
        username={username}
        repliedUser={replyFor}
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
          png: currentUser.image.png
        },
        username: currentUser.username
      }
    });
    props.Update();
    setNewReply("");
  }

  function deleteCommentConfirmation(id) {
    props.setIsModalVisible(true);
    props.setCommentIdKey(id);
  }

  function UpdateComment() {}

  const [NewReply, setNewReply] = useState("");

  // Store Elements into an array to pass into NewReply Function
  let username = props.username;
  let currentUser = props.user;
  let replyFor = props.replyingTo;
  let deleteCommentButton = "hidden";
  let userReply = [username, currentUser, SaveNewReply];
  let repliedUser = undefined;
  let updateButton = false;

  if (props.replyingTo != undefined) {
    repliedUser = "@" + props.replyingTo + " ";
  }

  if (currentUser.username == props.username) {
    deleteCommentButton = "";
    updateButton = true;
  }

  const [CommentState, setCommentState] = useState(
    <div>
      <div className="mb-5">
        <div className="commentBoxAlt ps-5">
          <div className="row col-12">
            <ProfileSection
              image={props.image}
              username={props.username}
              user={props.user}
              createdAt={props.createdAt}
            />
            <p className="textAlternate">
              <span className="repliedUser">{repliedUser}</span>
              {props.content}
            </p>
          </div>

          <div className="row col-12 position-relative">
            <div className="col-6">
              <VoteButton votes={props.score} />
            </div>
            <button
              className={"col-4 delete " + deleteCommentButton}
              onClick={() => deleteCommentConfirmation(props.id)}
            >
              <span className="">
                <img className="" src="./images/icon-delete.svg" /> Delete
              </span>{" "}
            </button>
            <div className="col-1">
              <ReplyAction
                UpdateComment={() => UpdateComment()}
                NewReplyButton={() => CreateNewReply(userReply)}
                updateButton={updateButton}
              />
            </div>
          </div>
        </div>
      </div>
      {NewReply}
    </div>
  );

  return <div>{CommentState}</div>;
}

export default CommentBox;
