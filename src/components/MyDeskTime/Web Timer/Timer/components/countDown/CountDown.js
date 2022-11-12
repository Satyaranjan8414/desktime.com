import React , {useState} from 'react';
import InputTimer from './InputTimer/InputTimer';
import TimerComponent from './TimerComponents/TimerComponents';
const CountDown = ( props ) => {
    const [ isTimerRunning , setTimerRunning ] = useState(false);
    const timerValue = {
        hours : 0,
        minutes: 0,
        seconds: 0
    }
    const startCountdown = ( timerData ) => {
        setTimer(timerData);
        setTimerRunning(!isTimerRunning);
    } 
    const stopCountdown = () => {
        setTimer(timerValue);
        setTimerRunning(!isTimerRunning);
    }
    const [ timer , setTimer ] = useState(timerValue);
    return (
      <div>
        {isTimerRunning ? (
          <TimerComponent timerData={timer} stopCountdown={stopCountdown} />
        ) : (
          <InputTimer startCountdown={startCountdown} />
        )}
      </div>
    );
}
export default CountDown;