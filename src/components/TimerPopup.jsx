import React, { useEffect, useState } from "react";
import PopupHeader from "./PopupHeader.jsx";
import "css/timerPopup.css";
import { closeIfClickedOutside } from "js/popup";

const COUNTDOWN_TIMER_LENGTH = 120;

const TimerPopup = (props) => {
  const { open, header, closePopup } = props;
  const [timerID, setTimerID] = useState(null);
  const [timer, setTimer] = useState(COUNTDOWN_TIMER_LENGTH);

  useEffect(() => {
    if (open) {
      const id = setInterval(() => setTimer((time) => time - 1), 1000);
      setTimerID(id);
      return () => clearInterval(id);
    } else setTimer(COUNTDOWN_TIMER_LENGTH);
  }, [open]);

  useEffect(() => {
    if (timer === 0) clearInterval(timerID);
  }, [timer]);

  const intToTwoDecimals = (num) =>
    num.toString().length > 1 ? num.toString() : "0" + num.toString();

  const getTimeObject = (totalTime) => {
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    return { hours, minutes, seconds };
  };

  const formatTime = (timeInSecs) => {
    let time = getTimeObject(timeInSecs);
    Object.keys(time).forEach((key) => {
      time[key] = intToTwoDecimals(time[key]);
    });
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  };

  return (
    <div
      className={`overlay-popup-container ${open ? "open" : ""}`}
      onClick={(e) => closeIfClickedOutside(e, open, closePopup, "timer-popup")}
    >
      <div className={`timer-popup popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <div className="countdown-text">
            Get 50% off when you sign up now.
          </div>
          <div className="countdown-text">
            Discount available for a limited time only!
          </div>
          <div
            className={`countdown ${timer < 60 ? "final" : ""} ${
              timer < 30 ? "very-last" : ""
            }`}
          >
            {formatTime(timer)}
          </div>
          <button
            className="signup-button"
            onClick={() => window.location.reload()}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerPopup;
