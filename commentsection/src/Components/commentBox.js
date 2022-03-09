import React, { useState } from "react";
import VoteButton from "./Buttons/voteButton.js";
import ProfileSection from "./profileSection.js";
import ReplyAction from "./Buttons/replyAction.js";
import useWindowDimension from "./windowDemension";
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

  function SaveNewReply(replyMessage) {
    let NewCommentId = props.idkeys.at(props.idkeys.length - 1) + 1;
    props.idkeys.push(NewCommentId);
    setNewReply(
      <CommentBox
        idkeys={props.idkeys}
        key={NewCommentId}
        id={NewCommentId}
        user={currentUser}
        image={currentUser.image.png}
        content={replyMessage}
        replyingTo={props.username}
        username={currentUser.username}
        setIsModalVisible={props.setIsModalVisible}
        setCommentIdKey={props.setCommentIdKey}
        createdAt={"Today"}
        score={0}
      />
    );
  }

  function deleteCommentConfirmation(id) {
    props.setIsModalVisible(true);
    props.setCommentIdKey(id);
   
  }

  const [NewReply, setNewReply] = useState("");

  // Store Elements into an array to pass into NewReply Function
  let username = props.username;
  let currentUser = props.user;
  let replyFor = props.replyingTo;
  let deleteCommentButton = "hidden";
  let userReply = [username, currentUser, SaveNewReply];
  let repliedUser = undefined;

  if (props.replyingTo != undefined) {
    repliedUser = "@" + props.replyingTo + " ";
  }

  if (currentUser.username == props.username) {
    deleteCommentButton = "";
  }

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
                <ReplyAction NewReplyButton={() => CreateNewReply(userReply)} />
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
                <div className="col-7">
                  <ProfileSection
                    image={props.image}
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
                    NewReplyButton={() => CreateNewReply(userReply)}
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
      {NewReply}
    </div>
  );
}

export default CommentBox;
