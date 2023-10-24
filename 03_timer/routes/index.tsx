import { useSignal } from "@preact/signals";
import Timer from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <Timer></Timer>
      </div>
    </div>
  );
}