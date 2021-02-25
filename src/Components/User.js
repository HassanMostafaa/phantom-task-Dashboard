import React from "react";
import NotifImg from "./imgs/notifimg.png";
import profileImg from "./imgs/profileimg.png";
import Notification from "./Notification";

const User = ({ active, setActive }) => {
  return (
    <div className="user-data">
      <div className="user-data-positioning">
        <div
          className="notif"
          style={{ cursor: "pointer" }}
          onClick={() => setActive(!active)}
        >
          <img src={NotifImg} alt="notif" />
        </div>
        <div className="data">
          <div className="img">
            <img src={profileImg} alt="img" />
          </div>
          <div className="text">
            <div className="name">Anthony Mike</div>
            <div className="email">anthony2142@email.com</div>
          </div>
        </div>
        <div className="notificationComponent">
          <Notification active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default User;
