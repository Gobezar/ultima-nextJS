import React from 'react'

const PageHeader = ({text} : {text: string}) => {
  return (
        <div className='mb-[50px] font-semibold text-[32px] leading-[24px] text-[#FFFFFFDB] text-start font-montseratt w-full
            laptop:text-[30px]
            tablet:text-[25px]
            mobile:text-[20px]'><h1>{text.toUpperCase()}</h1></div>
  )
}

export default PageHeader
