import { useSignal } from "@preact/signals";
import Timer from "../islands/Timer.tsx";

export default function Home() {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <Timer />
    </div>
  );
}
