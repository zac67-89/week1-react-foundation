"use client";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "task_manager_tasks";

export default function TaskManger() {
  type Task = {
    item: string;
    completed: boolean;
  };

  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedTasks ? JSON.parse(storedTasks) : [];
    }
    return [];
  });
  const [input, setInput] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wrapping in a timeout removes the "Synchronous" part of the error
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (input.trim() === "" || input.trim() === null) return;
    const checkTasks = tasks.filter((task) => task.item === input.trim());
    return (
      checkTasks.length > 0
        ? alert("Task already exists")
        : setTasks([...tasks, { item: input, completed: false }]),
      setInput("")
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  if (!mounted) return null;
  return (
    <div>
      <h1>Task Manager</h1>
      <h2>Task Count: {tasks.length}</h2>
      <button onClick={() => setTasks([])}>Clear All</button>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.item}
            </span>
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
