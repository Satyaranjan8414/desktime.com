import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../../../../../context/ThemeContext";
import "./TimerComponents.css"
let timeOutId = 0;
const TimerComponent = (props) => {
  const { themeMode } = useContext(ThemeContext);
  const timerItemClass = `timer-item ${themeMode}`;
  const { timerData } = props;
  const [countdownTime, setCountdownTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    let currDate = new Date().getTime();
    let difference = countdownTime - currDate;
    let timeDiff = {
      hours:
        difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };
    timeDiff.hours =
      timeDiff.hours < 10 ? `0${timeDiff.hours}` : `${timeDiff.hours}`;
    timeDiff.minutes =
      timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : `${timeDiff.minutes}`;
    timeDiff.seconds =
      timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : `${timeDiff.seconds}`;
    return timeDiff;
  };

  const stopTimer = () => {
    if (timeOutId > 0) {
      clearTimeout(timeOutId);
    }
    props.stopCountdown();
  };
  useEffect(() => {
    let expectedTime = new Date().getTime();
    let { hours, minutes, seconds } = timerData;
    expectedTime += hours > 0 ? hours * 3600000 : 0;
    expectedTime += minutes > 0 ? minutes * 60000 : 0;
    expectedTime += seconds > 0 ? seconds * 1000 : 0;
    setCountdownTime(expectedTime);
    return () => {
      expectedTime = 0;
    };
  }, [timerData]);

  useEffect(() => {
    if (countdownTime > new Date().getTime()) {
      timeOutId = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  });

  return (
    <div className="main-container-overlay">
      <div className="main-container">
        <div className="timer-component-container">
          <div className={timerItemClass}>
            <div className="timer-label-container">
              <label className="timer-label">{timeLeft.hours}</label>
            </div>
            <span>Hours</span>
          </div>
          <div className={timerItemClass}>
            <div className="timer-label-container">
              <label className="timer-label">{timeLeft.minutes}</label>
            </div>
            <span>Minutes</span>
          </div>
          <div className={timerItemClass}>
            <div className="timer-label-container">
              <label className="timer-label">{timeLeft.seconds}</label>
            </div>
            <span>Seconds</span>
          </div>
        </div>
        <div id="stop-btn">
          <div onClick={stopTimer}>
            <FontAwesomeIcon
              className={`icon-${themeMode}`}
              id="stop-icon"
              icon={faStop}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerComponent;
