import "./App.css";
import pomodoroLogo from "./img/pomodoro-logo.png";
import TimerSection from "./components/TimerSection";

function App() {
  return (
    <>
      <div className="main-title">
        <img className="pomodoro-logo" src={pomodoroLogo} alt="pomodoro-logo" />
        <h1 className="pomodoro-title">Pomodoro App</h1>
      </div>

      <TimerSection />
    </>
  );
}

export default App;
