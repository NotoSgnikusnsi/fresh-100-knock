import { useState } from "preact/hooks";
import type { Signal } from "@preact/signals";
import ItemPicker from "../components/ItemPicker.tsx";

interface TimeProps {
  time: { hours: number[]; mins: number[]; secs: number[] };
}

export default function ItemPickers(time) {
  const timeNames = Object.keys(time.time);
  return (
    <div class="flex justify-center">
      <ItemPicker
        name={timeNames[0]}
        values={time.time[timeNames[0]]}
        hours={time.hours}
        handleSetProps={time.handleSetHours}
      />
      <ItemPicker
        name={timeNames[1]}
        values={time.time[timeNames[1]]}
        mins={time.mins}
        handleSetProps={time.handleSetMins}
      />
      <ItemPicker
        name={timeNames[2]}
        values={time.time[timeNames[2]]}
        secs={time.secs}
        handleSetProps={time.handleSetSecs}
      />
    </div>
  );
}
