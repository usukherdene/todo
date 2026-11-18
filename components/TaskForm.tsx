import { ChangeEvent, useState } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = () => {
    event?.preventDefault();
    onCreateTask("taskTitle");
    setTaskTitle("");
  }

  return (
    <div>
    <div className="w-[608px] h-[74px] rounded-[16px] bg-[#F4F8F5] border border-[#DCE9E2] ml-8 mt-6 flex items-center gap-2">
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="Plan this week’s projects" 
      className="w-[454px] h-[56px] bg-[#FFFFFF] rounded-[12px] ml-2 p-4 placeholder:text-[#213D35]"/>
      <button type="submit" className="bg-[#236B53] w-[128px] h-[48px] rounded-[12px] text-[#FFFFFF] text-[14px] font-semibold flex gap-2 items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.33325V12.6666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white"/>
        <path d="M3.33203 8H12.6654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white"/>
        </svg>Add task
      </button>
    </div>
    <div className="w-[672px] h-[57px] flex justify-end items-start">
      <div className="text-[11px] text-[#7A8881] font-normal items-center justify-center flex mr-9 mt-3">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2V5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#7A8881"/>
        <path d="M4.5 5L2 7.5L4.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#7A8881"/>
        </svg>Enter to add a task
      </div>
    </div>
    </div>
  )
}
