import { useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import ItemPickers from "./ItemPickers.tsx";

export default function Timer() {
  const TIME = {
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
    ],
    mins: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
    ],
    secs: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
    ],
  };
  const [isStart, setIsStart] = useState(false);
  const [isBeep, setIsBeep] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const handleStartButtonClick = () => {
    setIsStart(!isStart);
  };
  const handleSetHours = (event) => {
    setHours(event.target.value);
  };
  const handleSetMins = (event) => {
    setMins(event.target.value);
  };
  const handleSetSecs = (event) => {
    setSecs(event.target.value);
  };

  const makeSound = () => {
    const ctx = new AudioContext();
    let oscillator;
    if (isBeep) return;
    oscillator = ctx.createOscillator();
    oscillator.type = "sine"; // sine, square, sawtooth, triangleがある
    oscillator.frequency.setValueAtTime(440, ctx.currentTime); // 440HzはA4(4番目のラ)
    oscillator.connect(ctx.destination);
    oscillator.start();
    setIsBeep(true);
    setTimeout(() => {
      oscillator.stop();
      setIsBeep(false);
    }, 2000);
  };

  if (isStart) {
    if (secs > 0) {
      setTimeout(() => {
        setSecs(secs - 1);
      }, 1000);
    } else if (mins > 0) {
      setTimeout(() => {
        setSecs(59);
        setMins(mins - 1);
      }, 1000);
    } else if (hours > 0) {
      setTimeout(() => {
        setSecs(59);
        setMins(59);
        setHours(hours - 1);
      }, 1000);
    } else {
      setIsStart(false);
      makeSound();
    }
  }

  return (
    <div class="rounded shadow-md">
      <div class="p-4">
        <h2 class="p-4 flex justify-center text-bold text-xl text-gray-500">
          Fresh Timer
        </h2>
        <ItemPickers
          time={TIME}
          handleSetHours={handleSetHours}
          handleSetMins={handleSetMins}
          handleSetSecs={handleSetSecs}
        />
        <h1 class="p-2 flex justify-center text-bold text-4xl">
          {String(hours).padStart(2, "0")}:{String(mins).padStart(
            2,
            "0",
          )}:{String(secs).padStart(2, "0")}
        </h1>
        <div class="p-4 flex justify-center items-center">
          {isStart
            ? (
              <button
                class="rounded-full border-2 h-12 w-12 bg-white hover:bg-gray-100 text-gray-600"
                onClick={() => {
                  handleStartButtonClick();
                }}
              >
                ■
              </button>
            )
            : (
              <button
                class="rounded-full h-12 w-12 bg-gray-500 hover:bg-gray-600 text-white"
                onClick={() => {
                  handleStartButtonClick();
                }}
              >
                ▶
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
