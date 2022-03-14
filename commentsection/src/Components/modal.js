import React from "react";
import CommentBox from "./commentBox";

function Modal(props) {
  let visablity = "";

  if (props.isVisible == false) {
    visablity = "hidden";
  }


  function deleteComment() {
    if (2 in props.CommentSection) {
      console.log("found " + props.findComment)
    } else console.log("Failed")
  }



  
  return (
        <div className={"modal-container " + visablity}>
        <div className="modal-content modal-frame">
          <div className="row justify-content-center">
            <h3 className="modal-title col-10">Delete Comment</h3>
          </div>
          <div className="row justify-content-center">
            <p className="model-body col-10">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
          </div>
          <div className="row justify-content-center">
            <button
              className="col-5 btn m-1 modal-button-negative"
              onClick={() => props.setIsVisible(false)}
            >
              No, Cancel
            </button>
            <button
              className="col-5 btn m-1 modal-button-positive"
              onClick={() => deleteComment()}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
  );
}

export default Modal;
