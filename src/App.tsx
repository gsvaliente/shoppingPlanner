import { useState } from "react";

import { Input, NewCategory, TaskList } from "./components";
import { useLocalStorage } from "./hooks";
import { Task } from "./shared/interfaces/task.interface";

import { v4 as uuidv4 } from "uuid";
import { StatusBox } from "./components/StatusBox";

export function App() {
  const [itemList, setItemList] = useLocalStorage("itemList", []);

  const allCategories: string[] = [
    "All",
    ...new Set<string>(itemList.map((task: Task) => task.category)),
  ];

  const [categoryList, setCategoryList] = useState<string[]>(allCategories);

  const handleAddCategory = (category: string) => {
    setCategoryList([...categoryList, category]);
  };

  const handleAddTask = (taskTitle: string, category: string) => {
    const newTask = {
      title: taskTitle,
      done: false,
      id: uuidv4(),
      created_at: new Date(),
      category,
    };
    const newList = [...itemList, newTask];
    setItemList(newList);
  };

  const handleDeleteTask = (taskId: string) => {
    const newList = itemList.filter((task: Task) => task.id !== taskId);
    setItemList(newList);
  };

  const handleToggleTask = (taskId: string) => {
    const newList = itemList.map((task: Task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setItemList(newList);
  };

  const sortByAlphabet = () => {
    setItemList([
      ...itemList.sort((a: Task, b: Task) =>
        a.category.localeCompare(b.category)
      ),
    ]);
  };

  return (
    <div className="flex flex-col justify-center align-center bg-stone-200 min-h-screen px-10 text-center lg:px-[33%] font-roboto">
      <header>
        <h1 className="font-bold text-4xl underline underline-offset-4">
          Shopping Planner
        </h1>
      </header>
      <div className="relative">
        <Input onAddTask={handleAddTask} categoryList={categoryList} />
        <NewCategory onAddCategory={handleAddCategory} />
        <button
          className="py-2 px-4 text-xs font-semibold border-2 rounded-xl bg-yellow-100 border-black"
          onClick={() => sortByAlphabet()}
        >
          SORT BY CATEGORY
        </button>
        <StatusBox list={itemList} />
        <TaskList
          list={itemList}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      </div>
    </div>
  );
}
