import { createContext, useEffect, useReducer, useRef } from "react";
import { initialTimerState, timerReducer } from "./useTimerReducer";

export const PomodoroContext = createContext(null);

export const PomodoroProvider = ({ children }) => {
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
    <PomodoroContext.Provider
      value={{state, handleStart, handleSetDuration, handleReset}}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
