import React from "react";

const Transfer = ({ TransferState, setTransferState, setConfCardState }) => {
  function sendBtnClicked() {
    setConfCardState(true);
    setTransferState(false);
  }
  return (
    <div className="TransferComp">
      {TransferState ? (
        <div className="transferCard">
          <div className="transferCardTextArea">
            <h1>Transfer</h1>
            <br />
            <br />
            <label>Transfer to</label>
            <input type="text" placeholder="Enter the E-mail Address" />
          </div>
          <div className="transferCardBtnsArea">
            <button onClick={() => setTransferState(false)}>Cancel</button>
            <button onClick={sendBtnClicked}>Send</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Transfer;
