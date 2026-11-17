export default function Home() {
  return <form className="w-[672px] h-[476px] bg-[#FFFFFF] rounded-[24px]" action="">
    <div className="flex items-center mt-8 ml-8 gap-3">
      <div className="w-[44px] h-[44px] rounded-[16px] bg-[#E5F2ED] flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5H21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#23735A"/>
          <path d="M13 12H21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#23735A"/>
          <path d="M13 19H21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#23735A"/>
          <path d="M3 17L5 19L9 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#23735A"/>
          <path d="M4 4H8C8.55228 4 9 4.44772 9 5V9C9 9.55228 8.55228 10 8 10H4C3.44772 10 3 9.55228 3 9V5C3 4.44772 3.44772 4 4 4Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#23735A"/>
            </svg>
      </div>
      <div className="text-[#213D35] text-[24px] font-semibold">My tasks.</div>
    </div>
    <div className="w-[608px] h-[74px] rounded-[16px] bg-[#F4F8F5] border border-[#DCE9E2] ml-8 mt-6 flex items-center gap-2">
      <input type="text" placeholder="Plan this week’s projects" className="w-[454px] h-[56px] bg-[#FFFFFF] rounded-[12px] ml-2 p-4 placeholder:text-[#213D35]"/>
      <div className="bg-[#236B53] w-[128px] h-[48px] rounded-[12px] text-[#FFFFFF] text-[14px] font-semibold flex gap-2 items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33203 8H12.6654" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
        <path d="M8 3.33325V12.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
        </svg>Add task
      </div>
    </div>
    <div className="w-[672px] h-[57px] flex justify-end items-start">
      <div className="text-[11px] text-[#7A8881] font-normal items-center justify-center flex mr-9 mt-3"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2V5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5H2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#7A8881"/>
        <path d="M4.5 5L2 7.5L4.5 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#7A8881"/>
        </svg>Enter to add a task
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </form>;
}
