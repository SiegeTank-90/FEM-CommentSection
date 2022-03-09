import React from "react";

function Modal(props) {
  let visablity = "";

  if (props.isVisible == false) {
    visablity = "hidden";
  }

  console.log("my comment Id is " + props.findComment)


  
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
              onClick={() => console.log()}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
  );
}

export default Modal;
