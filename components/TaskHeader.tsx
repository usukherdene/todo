export const TaskHeader = () => {
  return (
    <div className="flex items-center mt-8 mx-4 sm:mx-8 gap-3">
      <div className="w-[44px] h-[44px] shrink-0 rounded-[16px] bg-[#E5F2ED] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#23735A"/>
          <path d="M13 12H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#23735A"/>
          <path d="M13 19H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#23735A"/>
          <path d="M3 17L5 19L9 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#23735A"/>
          <path d="M4 4H8C8.55228 4 9 4.44772 9 5V9C9 9.55228 8.55228 10 8 10H4C3.44772 10 3 9.55228 3 9V5C3 4.44772 3.44772 4 4 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#23735A"/>
          </svg>
      </div>

      <div className="text-[#213D35] text-[24px] font-semibold">
        My tasks.
      </div>
    </div>
  );
};