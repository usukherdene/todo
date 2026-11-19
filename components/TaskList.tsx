import { TaskItem } from "./TaskItem";
import { TaskEmpty } from "./TaskEmpty";
import { Task } from "@/types";

type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete, onToggle, hasTasks }: TaskListProps) => {

  if(!tasks.length) return <TaskEmpty hasTasks={hasTasks}/>;

  return (
    <div className="w-full py-2 px-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};
