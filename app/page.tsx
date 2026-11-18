"use client";

import {TaskFilters, TaskForm, TaskHeader, TaskList} from "@/components"
import { useState } from "react";
import { Task } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (title: string) => {};

  return (
    <form className="w-[672px] bg-[#FFFFFF] rounded-[24px]" action="">
      <TaskHeader/>
      <TaskForm onCreateTask={createTask}/>
      <TaskFilters/>
      <TaskList/>
    </form>
  );
}
