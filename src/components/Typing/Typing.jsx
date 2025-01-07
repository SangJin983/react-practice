import { useEffect } from "react";
import { useTyping } from "./useTyping";

export const Typing = () => {
  const {
    state,
    setUserInput,
    startTimer,
    stopTimer,
    logElapsedTime,
    updateSentence,
  } = useTyping();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFocus = () => {
    if (state.startTime == null) {
      startTimer();
    }
  };

  useEffect(() => {
    if (state.userInput === state.sentence && state.startTime) {
      // stopTimer가 연속으로 호출되는 문제 방지
      if (state.endTime == null) {
        stopTimer();
      }
    }
  }, [
    state.userInput,
    state.sentence,
    stopTimer,
    state.startTime,
    state.endTime,
  ]);

  useEffect(() => {
    if (state.endTime) {
      logElapsedTime();
      updateSentence();
    }
  }, [state.endTime, logElapsedTime, updateSentence]);

  useEffect(() => {
    if (
      state.elapsedTime &&
      state.userInput !== "" &&
      state.startTime == null
    ) {
      startTimer();
    }
  }, [state.elapsedTime, state.userInput, startTimer, state.startTime]);

  return (
    <div>
      <p>{state.sentence}</p>
      <input
        type="text"
        value={state.userInput}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Type here..."
      />
      {state.elapsedTime && <p>Time Taken: {state.elapsedTime} seconds</p>}
    </div>
  );
};
