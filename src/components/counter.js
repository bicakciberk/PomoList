import { useEffect } from "react";
function Counter({ second, setSecond, minute, setMinute }) {
  useEffect(() => {
    if (second < 0 && minute !== 0) {
      setSecond(60);
      setMinute((e) => e - 1);
    } else if (minute < 0) {
      setMinute(0);
    } else if (second < 0 && minute === 0) {
      setSecond(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [second]);

  return (
    <div>
      <h1 className="text-white font-medium text-5xl">
        <span className="minute">{minute < 10 ? "0" + minute : minute}</span>:
        <span className="second">{second < 10 ? "0" + second : second}</span>
      </h1>
    </div>
  );
}
export default Counter;
