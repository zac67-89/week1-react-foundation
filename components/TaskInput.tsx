type TaskInputProps = {
  tasks: string;
  setInput: (tasks: string) => void;
  addTask: () => void;
};

export default function TaskInput({
  tasks,
  setInput,
  addTask,
}: TaskInputProps) {
  return (
    <div>
      <input
        type="text"
        value={tasks}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
