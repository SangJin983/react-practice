import { useReducer } from "react";
import TypingContext from "./TypingContext";
import { fetchRandomSentence } from "./utils/fetchRandomSentence";

const actionTypes = {
  SET_USER_INPUT: "SET_USER_INPUT",
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  LOG_ELAPSED_TIME: "LOG_ELAPSED_TIME",
  UPDATE_SENTENCE: "UPDATE_SENTENCE",
};

const initialTypingState = {
  sentence: "Type this sentence as fast as you can",
  userInput: "",
  startTime: null,
  endTime: null,
  elapsedTime: null,
};

const typingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SENTENCE:
      return { ...state, sentence: action.payload };
    case actionTypes.SET_USER_INPUT:
      return { ...state, userInput: action.payload };
    case actionTypes.START_TIMER:
      return { ...state, startTime: action.payload };
    case actionTypes.STOP_TIMER:
      return { ...state, endTime: action.payload };
    case actionTypes.LOG_ELAPSED_TIME:
      return {
        ...initialTypingState,
        elapsedTime: action.payload,
      };
    default:
      throw new Error("Invaild action type");
  }
};

export const TypingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(typingReducer, initialTypingState);

  const updateSentence = async () => {
    const newSentence = await fetchRandomSentence();
    dispatch({ type: actionTypes.UPDATE_SENTENCE, payload: newSentence[0] });
  };

  const setUserInput = (input) => {
    dispatch({ type: actionTypes.SET_USER_INPUT, payload: input });
  };

  const startTimer = () => {
    const startTime = Date.now();
    dispatch({ type: actionTypes.START_TIMER, payload: startTime });
  };

  const stopTimer = () => {
    const endTime = Date.now();
    dispatch({ type: actionTypes.STOP_TIMER, payload: endTime });
  };

  const logElapsedTime = () => {
    if (state.endTime && state.startTime) {
      const elapsedTime = (state.endTime - state.startTime) / 1000;
      dispatch({ type: actionTypes.LOG_ELAPSED_TIME, payload: elapsedTime });
    } else {
      throw new Error("Timer must be started and stopped before logging time");
    }
  };

  return (
    <TypingContext.Provider
      value={{
        state,
        setUserInput,
        startTimer,
        stopTimer,
        logElapsedTime,
        updateSentence,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};
