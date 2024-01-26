import { HiOutlineTrash } from "react-icons/hi";
import { Task } from "../shared/interfaces/task.interface";

interface Props {
  task: Task;
  onDelete: (taskId: string) => void;
  onToggle: (taskId: string) => void;
}

export const TaskItem = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div
      className={`flex justify-between bg-gray-200 border-2 border-black shadow-lg p-2 rounded-lg ${
        task.done ? " bg-red-200" : ""
      }`}
    >
      <div className="flex space-x-5">
        <div className={`font-bold ${task.done ? "line-through" : ""}`}>
          {task.title}
        </div>
        <div className="italic">{task.category}</div>
      </div>
      <div className="flex space-x-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <HiOutlineTrash onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
};
