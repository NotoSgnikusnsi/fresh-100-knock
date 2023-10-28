import TaskInput from "../islands/TaskInput.tsx";
import TodoList from "../islands/TodoList.tsx";
import CompleteList from "../islands/CompleteList.tsx";

export default function Home() {
  return (
    <div class="flex justify-center items-center w-screen h-screen">
      <div class="rounded shadow-lg p-4 bg-[#F4F4F4]">
        <h2 class="font-black text-sm text-gray-500 flex justify-center m-2">
          Fresh To-Do-List
        </h2>
        <TaskInput />
        <div id="todo">
          <h2 class="font-black text-sm text-gray-500 flex justify-center m-2">
            Todo
          </h2>
          <TodoList />
        </div>
        <div id="complete">
          <h2 class="font-black text-sm text-gray-500 flex justify-center m-2">
            Complete
          </h2>
          <CompleteList />
        </div>
      </div>
    </div>
  );
}
