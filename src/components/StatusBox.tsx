import { Task } from "../shared/interfaces/task.interface";

interface Props {
  list: Task[];
}

export const StatusBox = ({ list }: Props) => {
  const pendingTasks = list.filter((task: Task) => !task.done).length;
  const completedTasks = list.filter((task: Task) => task.done).length;
  return (
    <div className="flex font-semibold items-center justify-center space-x-2 mt-5">
      <div className="bg-red-200 p-2 rounded-lg">
        <div>Items To Buy</div>
        <div>{pendingTasks}</div>
      </div>
      <div className="bg-emerald-200 p-2 rounded-lg">
        <div>Items Bought</div>
        <div>{completedTasks}</div>
      </div>
    </div>
  );
};
