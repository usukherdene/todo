import React from 'react'

export const TaskEmpty = () => {
  return (
    <div className='w-full h-[224px] flex items-center justify-center flex-col'>
        <div className='w-[56px] h-[56px] rounded-full bg-[#F0F6F2] flex items-center justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#6C9B82"/>
            </svg>
        </div>
        <div className='m-2 text-[#304C3E] text-[16px] font-semibold'>Your list starts here</div>
        <div className='m-2 text-[#7A8881] text-[14px] font-normal'>Add your first task above.</div>
    </div>
  )
}
