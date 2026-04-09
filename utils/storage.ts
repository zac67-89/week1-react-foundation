import { Task } from "@/types/task";

const LOCAL_STORAGE_KEY = "tasks";

export const loadTasks = (): Task[] => {
  if (typeof window === "undefined") return [];
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks: Task[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};
