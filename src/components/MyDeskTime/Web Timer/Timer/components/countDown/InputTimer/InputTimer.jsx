import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../../../../../context/ThemeContext";
import "./InputTimer.css"

const InputTimer = props => {
  const { themeMode } = useContext(ThemeContext);
  const timerComponentClass = `time-component ${themeMode}`;
  const timerInputClass = `timer-input ${themeMode}`;
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const startTimer = () => {
    props.startCountdown({
      hours,
      minutes,
      seconds
    });
  };
  return (
    <div className="input-component-container">
      <div className="input-component">
        <p className={timerComponentClass}>
          <div className="input-container">
            <input
              className={timerInputClass}
              type="number"
              value={hours}
              onChange={e => setHours(e.target.value)}
            />
          </div>
          <span>Hours</span>
        </p>
        <p className={timerComponentClass}>
          <div className="input-container">
            <input
              className={timerInputClass}
              type="number"
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
            />
          </div>
          <span>Minutes</span>
        </p>
        <p className={timerComponentClass}>
          <div className="input-container">
            <input
              className={timerInputClass}
              type="number"
              value={seconds}
              onChange={e => setSeconds(e.target.value)}
            />
          </div>
          <span>Seconds</span>
        </p>
      </div>
      <div id="play-btn">
        <div onClick={startTimer}>
          <FontAwesomeIcon
            className={`icon-${themeMode}`}
            id="play-icon"
            icon={faPlay}
          />
        </div>
      </div>
    </div>
  );
};
export default InputTimer;
