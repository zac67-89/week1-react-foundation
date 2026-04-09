import { Task } from "@/types/task";

type TaskItemProps = {
  task: Task;
  toggleTask: () => void;
  deleteTask: () => void;
};

export default function TaskItem({
  task,
  toggleTask,
  deleteTask,
}: TaskItemProps) {
  return (
    <li>
      <span
        onClick={toggleTask}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.item}
      </span>
      <button onClick={deleteTask}>X</button>
    </li>
  );
}
