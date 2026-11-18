
export const TaskFilters = () => {
  return (
    <div className="w-[672px] h-[48px] border-b border-b-[#E9EEEB] text-[#7B8680] text-[14px] font-semibold flex">
        <div className="h-full flex items-center ml-8">All</div>
        <div className="h-full flex items-center ml-7">Active</div>
        <div className="h-full flex items-center ml-7">Completed</div>
        <div className="w-[16px] h-[25px] rounded-[6px] bg-[#F0F4F1] self-center flex items-center justify-center ml-[401px] text-[#65766C] text-[11px] font-normal">0</div>
    </div>
  )
}
