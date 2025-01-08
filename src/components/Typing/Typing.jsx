import { useEffect } from "react";
import { useTyping } from "./useTyping";
import "./Typing.css";

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

  // 타자 입력 완료시 종료시간 확인
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

  // 경과시간 기록 및 연습 문장 업데이트
  useEffect(() => {
    if (state.endTime) {
      logElapsedTime();
      updateSentence();
    }
  }, [state.endTime, logElapsedTime, updateSentence]);

  // 새로운 문장에 대한 스타트 타이머 조건 설정
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
    <div className="typing-container">
      <p className="typing-sentence">{state.sentence}</p>
      <input
        className="typing-input"
        type="text"
        value={state.userInput}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Type here..."
      />
      {state.elapsedTime && (
        <p className="typing-timer">Time Taken: {state.elapsedTime} seconds</p>
      )}
    </div>
  );
};
