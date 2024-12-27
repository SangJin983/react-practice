import { useReducer, useEffect } from "react";
import { initialTimerState, timerReducer } from "./useTimerReducer";
import { useRef } from "react";
import "./Pomodoro.css";

const Pomodoro = () => {
  const [state, dispatch] = useReducer(timerReducer, initialTimerState);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (state.isRunning && state.remainingTime > 0) {
      timerIdRef.current = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    if (state.isRunning && state.remainingTime <= 0) {
      dispatch({ type: "STOP_TIMER" });
      alert("타이머가 종료되었습니다");
    }

    return () => {
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [state.isRunning, state.remainingTime]);

  const handleStart = () => {
    dispatch({ type: "START_TIMER" });
  };

  const handleSetDuration = (duration) => {
    dispatch({ type: "SET_DURATION", payload: duration });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_TIMER" });
  };

  return (
    <div className="pomodoro-container">
      <div className="remaining-time">
        남은 시간: {Math.floor(state.remainingTime / 60)}:
        {state.remainingTime % 60 < 10 ? "0" : ""}
        {state.remainingTime % 60}
      </div>
      <label className="pomodoro-label">
        시간 설정 (분):
        <input
          className="pomodoro-input"
          type="number"
          onChange={(e) => handleSetDuration(e.target.value * 60)}
          value={state.duration / 60}
        />
      </label>
      <div className="pomodoro-button-container">
        <button className="pomodoro-button" onClick={handleStart}>
          시작
        </button>
        <button className="pomodoro-button reset" onClick={handleReset}>
          리셋
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
