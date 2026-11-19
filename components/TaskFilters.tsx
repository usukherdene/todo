import { FilterType, Task } from "@/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFilterProps = {
  filter: FilterType;
  onFilter: (filter: FilterType) => void;
  tasks: Task[];
};

export const TaskFilters = ({ filter, onFilter, tasks }: TaskFilterProps) => {
  return (
    <div className="w-[672px] h-[48px] border-b border-b-[#E9EEEB] text-[#7B8680] text-[14px] font-semibold flex">
      {filters.map((item) => (
        <button
          id={item}
          key={item}
          onClick={() => onFilter(item)}
          className={`h-full flex items-center ml-8 border-b-2 ${filter === item ? "border-b-[#236B53] text-[#236B53]" : "border-b-transparent"}`}>{item}
        </button>))}
      <div className="w-[16px] h-[25px] rounded-[6px] bg-[#F0F4F1] self-center flex items-center justify-center ml-auto mr-8 text-[#65766C] text-[11px] font-normal">
        {tasks.length}
      </div>
    </div>
  );
};