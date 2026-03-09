import React from 'react'
import { TickIcon, TimeIcon } from '../../../../Assets/Svg'
import { Button } from '../../../../Components'
import './style.scss'

const AssessmentCard = ({ cardData, onStart }) => {
    const { image, heading, subHeading, status, time, percentage } = cardData

    return (
        <div className='bg-[#FFFFFF] rounded-[12px] px-[16px] py-[12px] border border-[#E9E9E9] flex flex-col gap-[22px]'>
            <div className='flex flex-col gap-[16px]'>
                <div className='rounded-[8px] border border-[#E9E9E9]'>
                    <img src={image} alt="" className='w-full rounded-[8px] h-full object-contain ' />
                </div>
                {(heading || subHeading) && (
                    <div className='flex flex-col gap-[8px]'>
                        {heading && <p className='cardHeading'>{heading}</p>}
                        {subHeading && <p>{subHeading}</p>}
                    </div>
                )}
            </div>
            <div className={`flex justify-between items-center ${status === 'progress' ? "flex-row-reverse" : ""}`}>
                {time && (
                    <div className='flex items-center gap-[4px]'>
                        <TimeIcon />
                        <label>{time}</label>
                    </div>
                )}
                {status === 'start' ? (
                    <Button title='Start' onClick={onStart} />
                ) : status === 'completed' ? (
                    <div className='flex items-center py-[8px] px-[12px] border border-[#007429] bg-[#E9FFF1] rounded-full gap-[4px]'>
                        <p className='successText'>Completed</p>
                        <TickIcon />
                    </div>
                ) : (
                    <div className='w-[75%] h-[8px] bg-[#E9E9E9] rounded-[30px] overflow-hidden'>
                        <div
                            className='h-full bg-[#78C0DD] rounded-[30px] transition-all duration-300'
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AssessmentCard