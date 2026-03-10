import React from 'react'
import Button from '../Button'

const PageWrapper = ({ children, icon, heading, subHeading, handleIconClick, btnTitle, handleBtnClick, breadCrumb }) => {
    return (
        <div className='h-full flex flex-col gap-[24px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[12px]'>
                    <div onClick={handleIconClick} className='p-[17px] border-[#E9E9E9] border-2 bg-[#FFFFFF] rounded-[8px] cursor-pointer'>
                        {icon}
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <h4>{heading}</h4>
                        {subHeading && <p className='bodyMedium secondaryTxt'>{subHeading}</p>}
                        {breadCrumb && breadCrumb}
                    </div>
                </div>

                <Button onClick={handleBtnClick} title={btnTitle} className={'w-[172px]!'} />
            </div>
            <div className='h-[calc(100%-58px)] overflow-y-scroll axyon__scrollBar'>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper