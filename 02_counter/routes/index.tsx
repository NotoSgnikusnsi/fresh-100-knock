import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex justify-center items-center w-screen h-screen">
      <Counter count={count} />
    </div>
  );
}
