import { Task } from "../shared/interfaces/task.interface";
import { TaskItem } from "./TaskItem";

interface Props {
  list: Task[];
  onDelete: (taskId: string) => void;
  onToggle: (taskId: string) => void;
}

export const TaskList = ({ list, onDelete, onToggle }: Props) => {
  return (
    <div className="mt-5">
      <h2 className="ml-3 font-bold text-md uppercase text-left">
        Tasks To-Do
      </h2>
      <ul className="p-3 space-y-3 overflow-y-auto max-h-96">
        {list.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};
