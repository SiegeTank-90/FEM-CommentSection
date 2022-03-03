import "./App.css";
import React, { useState } from "react";
import CommentBox from "./Components/commentBox";
import CreateReply from "./createReply";


function App(props) {
  const { json } = props;
  var { currentUser, comments } = json;

  comments.sort(function (a, b) {
    return a.score > b.score;
  });

  function mapCommentSection(props) {
    const startReplies = props.replies.map((reply) => (
      <CommentBox
        user={currentUser}
        key={reply.id}
        content={reply.content}
        createdAt={reply.createdAt}
        score={reply.score}
        username={reply.user.username}
        image={reply.user.image.png}
      />
    ));

    return (
      <div>
          <CommentBox
            key={props.id}
            user={currentUser}
            content={props.content}
            createdAt={props.createdAt}
            score={props.score}
            username={props.user.username}
            image={props.user.image.png}
          />
          <div className="row justify-content-start">
          <div className="col-md-1"></div>
          <div className= "col-md-10 replyLine ps-4" >{startReplies}</div>
        </div>
      </div>
    );
  }

  const StartingCommentSection = comments.map((comment) =>
    mapCommentSection(comment)
  );



  const [CommentSection, setCommmentSection] = useState(StartingCommentSection);

  return <div className="container"><ul>{CommentSection}</ul></div>;
}

export default App;
