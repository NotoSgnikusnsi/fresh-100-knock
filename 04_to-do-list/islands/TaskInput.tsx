export default function TaskInput() {
  return (
    <div>
      <form action="" method="get" class="flex text-center">
        <input
          type="text"
          placeholder="Add new task."
          class="m-2 p-2 rounded shadow"
        />
        <button
          type="submit"
          class="rounded-full bg-green-400 hover:bg-green-500 p-4 m-3"
        >
        </button>
      </form>
    </div>
  );
}
