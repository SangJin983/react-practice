import "./Pomodoro.css";
import { usePomo } from "./usePomo";

const Pomodoro = () => {
  const { state, handleStart, handleSetDuration, handleReset } = usePomo();

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
