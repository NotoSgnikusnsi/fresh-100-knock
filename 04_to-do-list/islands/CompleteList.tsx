export default function CompleteList() {
  return (
    <div id="complete-list" class="line-through">
      <div class="flex rounded shadow items-center bg-white px-2 justify-between p-4 m-2">
        <p class="p-2 text-bold text-gray-400">task</p>
        <div class="flex">
          <button class="bg-red-500 hover:bg-red-600 p-4 m-3 rounded-full m-1">
          </button>
          <button class="bg-green-400 hover:bg-green-500 p-4 m-3 rounded-full m-1">
          </button>
        </div>
      </div>
    </div>
  );
}
