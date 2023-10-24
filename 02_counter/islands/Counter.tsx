import type { Signal } from "@preact/signals";

export default function Counter() {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex gap-8 py-6">
      <div class="flex-shrink-0 p-2">
        <h3 class="p-3 text-xl text-gray-500 flex justify-center">Fresh counter</h3>
        <h1 class="p-5 flex justify-center font-bold text-5xl">3</h1>
        <div class="p-3">
          <div class="flex justify-between">
            <button class="bg-white border-green-500 text-green-500 font-bold text-xl h-14 w-14 m-2 rounded-full border-2 flex-start align-center">-</button>
            <button class="bg-green-500 border-green-500 text-white font-bold h-14 w-14 m-2 rounded-full border-2 flex-end">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
