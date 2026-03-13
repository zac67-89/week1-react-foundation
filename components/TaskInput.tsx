"use client";
import { useState } from "react";

export default function TaskInput() {
  const [tasks, setTasks] = useState("");
  return (
    <div>
      <input
        type="text"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        placeholder="Enter Task"
      />
      <h2>{tasks}</h2>
    </div>
  );
}
