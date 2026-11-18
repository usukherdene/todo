import React from 'react'

export const TaskItem = () => {
  return (
    <div className='w-[632px] h-[60px] flex items-center justify-between'>
        <div className='h-full flex items-center gap-6'>
            <label className="relative flex items-center cursor-pointer">
            <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-full border border-[#BDCDC2] checked:bg-[#23735A] checked:border-[#23735A] m-[19px]"/>
            <svg className='m-[19px] absolute left-0.5 w-4 h-4 hidden peer-checked:block pointer-events-none' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6654 3.5L5.2487 9.91667L2.33203 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke="white"/>
            </svg>
            </label>
            <div className='text-[#30483C] text-[14px] font-medium'></div>
        </div>
        <button className='m-2' type='submit'>
            <svg className='m-[14px]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66797 7.33325V11.3333" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#93A198"/>
            <path d="M9.33203 7.33325V11.3333" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#93A198"/>
            <path d="M12.6654 4V13.3333C12.6654 13.687 12.5249 14.0261 12.2748 14.2761C12.0248 14.5262 11.6857 14.6667 11.332 14.6667H4.66536C4.31174 14.6667 3.9726 14.5262 3.72256 14.2761C3.47251 14.0261 3.33203 13.687 3.33203 13.3333V4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#93A198"/>
            <path d="M2 4H14" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#93A198"/>
            <path d="M5.33203 3.99992V2.66659C5.33203 2.31296 5.47251 1.97382 5.72256 1.72378C5.9726 1.47373 6.31174 1.33325 6.66536 1.33325H9.33203C9.68565 1.33325 10.0248 1.47373 10.2748 1.72378C10.5249 1.97382 10.6654 2.31296 10.6654 2.66659V3.99992" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#93A198"/>
            </svg>
        </button>
    </div>
  )
}
