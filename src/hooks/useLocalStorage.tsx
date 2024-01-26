import { useEffect, useState } from "react";
import { Task } from "../shared/interfaces/task.interface";

export const useLocalStorage = (key: string, initialValue: Task[]) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
