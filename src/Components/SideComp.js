import React from "react";
import DiscordLogo from "./imgs/discord.png";
import TransferLogo from "./imgs/transfer.png";
import laptop from "./imgs/Laptop.png";
import appleLogo from "./imgs/Apple_logo_black.png";
import winLogo from "./imgs/Windows_logo_-_2012.png";

const SideComp = ({ setTransferState }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="firstCard">
          <div className="text">
            <p>License key</p>
            <span>XXXX - XXXX - XXXX - XXXX</span>
          </div>
          <div className="firstCardBtns">
            <button className="renewBtn">Renew Now</button>
            <button className="deactiveBtn"> Deactive</button>
          </div>
          <p className="nextRenewal">
            Next Renewal On :
            <span style={{ fontWeight: "600", color: "#f4f4f4" }}>
              22 Mar 2022
            </span>
          </p>
        </div>
        <div className="secondCard">
          <div className="secondCardText">
            <img
              style={{ marginBottom: "-5px" }}
              src={DiscordLogo}
              alt="discord"
            />
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              &nbsp; Discord ID
            </span>
            <p>antony#5145</p>
          </div>
          <button style={{ background: "#323662", color: "#EC4165" }}>
            Unbind
          </button>
        </div>
        <div className="thirdCard">
          <div className="thirdCardText">
            <img
              style={{ marginBottom: "-5px" }}
              src={TransferLogo}
              alt="transfer"
            />
            <span>&nbsp; Transfer</span>
            <br />
            <br />
            <br />
            <p style={{ color: "#AAACBB", fontSize: "14px" }}>Current Email:</p>
            <p>anthony2142@emaill.com</p>
          </div>
          <button onClick={() => setTransferState(true)}>
            Transfer to &#8594;
          </button>
        </div>
        <div className="lastCard">
          <div className="lastCardText">
            <div className="desktop">
              <img style={{ marginBottom: "-5px" }} src={laptop} alt="laptop" />
              <p>Desktop App</p>
            </div>
          </div>
          <div className="lastCardBtns">
            <button>
              <img
                style={{ marginBottom: "-5px" }}
                src={appleLogo}
                alt="appleLogo"
              />
              &nbsp; Download for MacOS
            </button>
            <button>
              <img
                style={{ marginBottom: "-5px" }}
                src={winLogo}
                alt="windowsLogo"
              />
              &nbsp; &nbsp;Download for Windows
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComp;
