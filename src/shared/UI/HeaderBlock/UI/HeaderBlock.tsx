import React from 'react'

const HeaderBlock = ({text} : {text: string}) => {
  return (
    <div className='flex flex-col items-center font-montseratt'>
        <div className='mb-[23px] font-semibold text-[32px] leading-[24px] text-[#FFFFFFDB]
            laptop:text-[30px]
            tablet:text-[25px]
            mobile:text-[20px]'><h3>{text.toUpperCase()}</h3></div>
        <div className='w-[134px] h-[2px] bg-[conic-gradient(from_180deg_at_50%_50%,#F7BB03_0deg,#F78703_360deg,#F7B303_360deg)]'></div>
    </div>
  )
}

export default HeaderBlock
