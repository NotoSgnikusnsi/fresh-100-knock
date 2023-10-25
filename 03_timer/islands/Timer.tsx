import { useState } from "preact/hooks";
import ItemPicker from "../components/ItemPicker.tsx";

export default function Timer() {
  const [start, setStart] = useState(false);
  const handleStartButtonClick = () => {
    setStart(!start);
  };
  return (
    <div class="rounded shadow-md">
      <div class="p-4">
        <h2 class="p-4 flex justify-center text-bold text-xl text-gray-500">
          Fresh Timer
        </h2>
        <div class="flex">
          <ItemPicker />
          <ItemPicker />
        </div>
        <h1 class="p-2 flex justify-center text-bold text-4xl">00:00:00</h1>
        <div class="p-4 flex justify-center items-center">
          {start
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
