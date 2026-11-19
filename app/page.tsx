"use client";

import { TaskFilters, TaskForm, TaskHeader, TaskList } from "@/components";
import { useState } from "react";
import { Task, FilterType } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [filter, setFilter] = useState<FilterType>("All");

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks((current) => [newTask, ...current]);
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task)=> task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((current) => current.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const visibleTasks = tasks.filter((task) => filter === "All" || (filter === "Active" ? !task.completed: task.completed));

  return (
  <main className="w-full px-4 pt-[100px]">
    <div className="w-full max-w-[672px] mx-auto bg-white rounded-[24px] pt-2">
      <TaskHeader />
      <TaskForm onCreateTask={createTask} />
      <TaskFilters filter={filter} onFilter={setFilter} tasks={visibleTasks} />
      <TaskList
        tasks={visibleTasks}
        hasTasks={tasks.length > 0}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  </main>
);
}