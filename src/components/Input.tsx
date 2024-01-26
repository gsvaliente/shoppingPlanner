import { FormEvent, useState } from "react";

interface Props {
  onAddTask: (task: string, category: string) => void;
  categoryList: string[];
}

export const Input = ({ onAddTask, categoryList }: Props) => {
  const [task, setTask] = useState<string>("");
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;
    if (category === "" || category === "All") return;
    onAddTask(task, category);
    setShowCategory(false);
    setTask("");
  };
  return (
    <form className="m-5 space-y-2" onSubmit={handleAddTask}>
      <div className="flex space-x-3 justify-center items-center">
        <input
          type="text"
          onFocus={() => setShowCategory(!showCategory)}
          value={task}
          placeholder="new item..."
          onChange={(e) => setTask(e.target.value)}
          className="ml-2 bg-gray-200 border-2 border-black p-1 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-400 px-3 py-1 text-black font-semibold rounded-xl border-2 border-black"
        >
          Add
        </button>
      </div>
      {showCategory && (
        <div className="flex justify-center items-center space-x-4">
          <div className="font-semibold">Choose category</div>
          <select
            className="bg-gray-200 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500 text-center border-2 border-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}
    </form>
  );
};
