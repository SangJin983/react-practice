import { useEffect } from "react";
import { useTyping } from "./useTyping";

export const Typing = () => {
  const { state, setUserInput, startTimer, stopTimer, logElapsedTime } =
    useTyping();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFocus = () => {
    if (state.startTime == null) {
      startTimer();
    }
  };

  useEffect(() => {
    if (state.userInput === state.sentence) {
      stopTimer();
    }
  }, [state.userInput, state.sentence, stopTimer]);

  useEffect(() => {
    if (state.endTime) {
      logElapsedTime();
    }
  }, [state.endTime, logElapsedTime]);

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
