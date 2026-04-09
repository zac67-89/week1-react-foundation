"use client";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Task } from "@/types/task";
import { loadTasks, saveTasks } from "@/utils/storage";


export default function TaskManger() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks
  );
  const [input, setInput] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
   saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const existed = tasks.some((task) => task.item === trimmed);
    if (existed) {
      alert("Task already exists");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      item: trimmed,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  if (!mounted) return null;
  return (
    <div>
      <h1>Task Manager</h1>
      <h2>Task Count: {tasks.length}</h2>
      <button onClick={() => setTasks([])}>Clear All</button>
      <br />
      <TaskInput tasks={input} setInput={setInput} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}
