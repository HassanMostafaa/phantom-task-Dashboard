import React from "react";
import NotifImg from "./imgs/SuccessNotificaion.png";
import emailSentNotifImg from "./imgs/emailSentNotifImg.png";

const Notification = ({ active, setActive }) => {
  return (
    <div className="NotificationComp">
      {active ? (
        <div className="notificationsCard">
          <h1>Notifications</h1> <br />
          <div className="notification">
            <div className="notifImg">
              <img src={NotifImg} height="25px" alt="notificaitonImg" />
            </div>
            <div className="notifText">
              <div className="notifTitle">
                <h3>Transfer link confirmed</h3>
              </div>
              <div className="notifContent">
                <p>by jamesconor@email.com Just Now</p>
              </div>
            </div>
          </div>
          <div className="notification">
            <div className="notifImg">
              <img src={NotifImg} height="25px" alt="notificaitonImg" />
            </div>
            <div className="notifText">
              <div className="notifTitle">
                <h3>Transfer link confirmed</h3>
              </div>
              <div className="notifContent">
                <p>by jamesconor@email.com 2 min ago</p>
              </div>
            </div>
          </div>
          <div className="notification">
            <div className="notifImg">
              <img
                src={emailSentNotifImg}
                height="25px"
                alt="notificaitonImg"
              />
            </div>
            <div className="notifText">
              <div className="notifTitle">
                <h3>Confirmation email sent </h3>
              </div>
              <div className="notifContent">
                <p>
                  to anthony2142@email.com and jamesconor@email.com 5 min ago
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </div>
  );
};

export default Notification;
