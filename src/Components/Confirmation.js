import React from "react";
import ConfirmationCardImg from "./imgs/confirmationCardimg.png";
import x from "./imgs/x.png";
const Confirmation = ({ setConfCardState, ConfCardState }) => {
  return (
    <div className="ConfermationComp">
      {ConfCardState ? (
        <div className="confirmationCard">
          <p
            onClick={() => setConfCardState(!ConfCardState)}
            style={{ marginRight: "-340px", cursor: "pointer" }}
          >
            <img src={x} alt="" />
          </p>
          <img
            className="confLogo"
            src={ConfirmationCardImg}
            alt="ConfirmationCardImg"
          />
          <br />
          <br />

          <h2>Confirmation Email Sent</h2>
          <br />
          <p>
            We sent a link to
            <a href="https://www.google.com"> anthony2142@email.com</a> . Check
            the email to confirm the transfer.
          </p>
          <br />
          <p style={{ color: "#ABADBD", fontSize: "14px" }}>
            Didn't Get Confirmation email?
          </p>
          <p style={{ fontSize: "14px" }}>
            Check Your spam or <a href="https://www.google.com">Send Agin </a>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Confirmation;
