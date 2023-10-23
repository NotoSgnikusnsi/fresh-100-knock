import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex justify-center items-center w-screen h-screen bg-gray-400">
      <h1 class="text-3xl text-gray-50">Hello World</h1>
    </div>
  );
}
