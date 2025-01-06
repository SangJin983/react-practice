import { createContext, useReducer } from "react";

const SET_USER_INPUT = "SET_USER_INPUT";
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const LOG_ELAPSED_TIME = "LOG_ELAPSED_TIME";

const initialTypingState = {
  sentence: "Type this sentence as fast as you can",
  userInput: "",
  startTime: null,
  endTime: null,
  elapsedTime: null,
};

const typingReducer = (state, action) => {
  switch (action.type) {
    case `${SET_USER_INPUT}`:
      return { ...state, userInput: action.payload };
    case `${START_TIMER}`:
      return { ...state, startTime: Date.now() };
    case `${STOP_TIMER}`:
      return { ...state, endTime: Date.now() };
    case `${LOG_ELAPSED_TIME}`:
      return {
        ...initialTypingState,
        elapsedTime: (state.endTime - state.startTime) / 1000,
      };
    default:
      throw new Error("Invaild action type");
  }
};

export const TypingContext = createContext(null);

export const TypingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(typingReducer, initialTypingState);

  const setUserInput = (input) => {
    dispatch({ type: `${SET_USER_INPUT}`, payload: input });
  };

  const startTimer = () => {
    dispatch({ type: `${START_TIMER}` });
  };

  const stopTimer = () => {
    dispatch({ type: `${STOP_TIMER}` });
  };

  const logElapsedTime = () => {
    if (state.endTime && state.startTime) {
      dispatch({ type: `${LOG_ELAPSED_TIME}` });
    } else {
      throw new Error(
        "Timer must be started and stopped before logging time"
      );
    }
  };

  return (
    <TypingContext.Provider
      value={{ state, setUserInput, startTimer, stopTimer, logElapsedTime }}
    >
      {children}
    </TypingContext.Provider>
  );
};
