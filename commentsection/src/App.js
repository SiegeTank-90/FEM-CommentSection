import "./App.css";
import React, { useState } from "react";
import CommentBox from "./Components/commentBox";
import TabletCommentBox from "./Components/TabletcommentBox";
import Modal from "./Components/modal";
var idkeys = [1, 2, 3, 4];

function App(props) {
 
  const { json } = props;
  var { currentUser, comments } = json;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentIdKey, setCommentIdKey] = useState("");

  comments.sort(function (a, b) {
    return a.score > b.score;
  });


  
  function loadComments() {
    console.log(comments[0].replies)
    let NewComments = comments.map((comments) => mapCommentSection(comments));
    
    setCommmentSection(NewComments);
  }

  function mapCommentSection(props) {
    const startReplies = props.replies.map((reply) => (
      <div>
        <div className="DesktopView">
          <CommentBox
            idkeys={idkeys}
            user={currentUser}
            key={reply.id}
            id={reply.id}
            content={reply.content}
            createdAt={reply.createdAt}
            score={reply.score}
            replyingTo={reply.replyingTo}
            username={reply.user.username}
            image={reply.user.image.png}
            setIsModalVisible={setIsModalVisible}
            setCommentIdKey={setCommentIdKey}
            Array={props.replies}
            Update={() => loadComments()}
          />
        </div>
        <div className="TabletView">
          
          <TabletCommentBox
            idkeys={idkeys}
            user={currentUser}
            key={reply.id}
            id={reply.id}
            content={reply.content}
            createdAt={reply.createdAt}
            score={reply.score}
            replyingTo={reply.replyingTo}
            username={reply.user.username}
            image={reply.user.image.png}
            setIsModalVisible={setIsModalVisible}
            setCommentIdKey={setCommentIdKey}
            Array={props.replies}
            Update={() => loadComments()}
          />
        </div>
      </div>
    ));

    return (
      <div>
        <div className="DesktopView">
          <CommentBox
            idkeys={idkeys}
            key={props.id}
            id={props.id}
            user={currentUser}
            content={props.content}
            createdAt={props.createdAt}
            score={props.score}
            username={props.user.username}
            replyingTo={props.replyingTo}
            image={props.user.image.png}
            setIsModalVisible={setIsModalVisible}
            setCommentIdKey={setCommentIdKey}
            Array={props.replies}
            Update={() => loadComments()}
          />
        </div>
        <div className="TabletView">
          <TabletCommentBox
            idkeys={idkeys}
            key={props.id}
            id={props.id}
            user={currentUser}
            content={props.content}
            createdAt={props.createdAt}
            score={props.score}
            username={props.user.username}
            replyingTo={props.replyingTo}
            image={props.user.image.png}
            setIsModalVisible={setIsModalVisible}
            setCommentIdKey={setCommentIdKey}
            Array={props.replies}
            Update={() => loadComments()}
          />
        </div>
        <div className="row justify-content-start">
          <div className="col-md-1"></div>
          <div className="col-md-10 replyLine ps-4">{startReplies}</div>
        </div>
      </div>
    );
  }

  let StartingCommentSection = comments.map((comment) =>
    mapCommentSection(comment)
  );

  const [CommentSection, setCommmentSection] = useState(StartingCommentSection);

  return (
    <div className={"container-fluid"}>
      <Modal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        findComment={commentIdKey}
        CommentSection={CommentSection}
        allComments={comments}
        Update={() => loadComments()}
      />
      <ul>{CommentSection}</ul>
    </div>
  );
}

export default App;
