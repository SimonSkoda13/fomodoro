"use client";
import React, { useEffect, useState } from "react";

const displayTime = (time: number) => {
  time = Math.floor(time);
  // decide if it is under minute than return seconds and if not return minutes
  if (time < 60) {
    return <h1>{time} sec</h1>;
  } else {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return (
      <h1>
        {minutes} min {seconds} sec
      </h1>
    );
  }
};

export default function Counter() {
  const [time, setTime] = useState<number>(0);
  const [start, setStart] = useState(2);
  const [pauseTime, setPauseTime] = useState(0);

  useEffect(() => {
    if (start == 1) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    } else if (start == 0 && pauseTime > 0) {
      setTimeout(() => {
        setPauseTime(pauseTime - 1);
      }, 1000);
    } else if (start == 0 && pauseTime <= 0) {
      setStart(1);
      setTime(0);
    }
  }, [time, start, pauseTime]);
  const handleStart = () => {
    if (start == 1) {
      setStart(0);
      setPauseTime(time / 5);
    } else {
      setStart(1);
      setTime(0);
    }
  };
  const handleReset = () => {
    setStart(2);
    setTime(0);
    setPauseTime(0);
  };
  const decideStartLabel = () => {
    if (start == 2) {
      return "Start";
    } else if (start == 0) {
      return "Work";
    } else {
      return "Pause";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl text-red-600 text-center my-9">
        {start == 1 ? displayTime(time) : displayTime(pauseTime)}
      </div>
      <div className="flex gap-6 text-white text-xl">
        <button
          onClick={handleStart}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          {decideStartLabel()}
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
