import { Task } from "@/types/task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={() => toggleTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}
