import { useEffect, useState, useRef } from "react";
import "./flip.css"; // we'll define animations here

const FlipUnit = ({ digit, previousDigit }) => {
  const [flipping, setFlipping] = useState(false);
  const topRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    if (digit !== previousDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => setFlipping(false), 500); // duration of animation
      return () => clearTimeout(timeout);
    }
  }, [digit, previousDigit]);

  return (
    <div className="relative inline-flex flex-col rounded-sm shadow-md">
      {/* Top static */}
      <div className="bg-gray-100 rounded-t-sm border-b border-black/10 h-8 leading-none p-2 overflow-hidden text-center text-3xl top">
        {digit}
      </div>

      {/* Bottom static */}
      <div className="bg-white flex items-end rounded-b-sm h-8 p-2 overflow-hidden text-center text-3xl bottom">
        {digit}
      </div>

      {/* Top Flip Animation */}
      {flipping && (
        <div className="top-flip" ref={topRef}>
          {previousDigit}
        </div>
      )}

      {/* Bottom Flip Animation */}
      {flipping && (
        <div className="bottom-flip" ref={bottomRef}>
          {digit}
        </div>
      )}
    </div>
  );
};

const FlipSegment = ({ label, digits }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-base text-red-600">{label}</div>
    <div className="flex gap-1">
      {digits.map((d, i) => (
        <FlipUnit key={i} digit={d[0]} previousDigit={d[1]} />
      ))}
    </div>
  </div>
);

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [previousTime, setPreviousTime] = useState(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousTime(timeLeft);
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time) => {
    const h = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0")
      .split("")
      .map((d, i) => [d, Math.floor(previousTime / 3600).toString().padStart(2, "0")[i]]);

    const m = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0")
      .split("")
      .map((d, i) => [d, Math.floor((previousTime % 3600) / 60).toString().padStart(2, "0")[i]]);

    const s = (time % 60)
      .toString()
      .padStart(2, "0")
      .split("")
      .map((d, i) => [d, (previousTime % 60).toString().padStart(2, "0")[i]]);

    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="flex justify-center gap-2 text-red-600 font-mono bg-gray-100 min-h-screen items-center">
      <FlipSegment label="Hours" digits={h} />
      <FlipSegment label="Minutes" digits={m} />
      <FlipSegment label="Seconds" digits={s} />
    </div>
  );
};

export default Pomodoro;
