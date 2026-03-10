import React from 'react'
import { Images } from '../../../Assets/Images'
import { TimeIcon } from '../../../Assets/Svg'
import { Button } from '../../../Components'

const AssessmentFlow = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full bg-[#F5F5F5] '>
            <div className='bg-white rounded-[8px] border border-[#E9E9E9] w-[75%] overflow-hidden py-[32px] gap-[32px] flex flex-col justify-center items-center'>
                <div className=' rounded-[8px] border border-[#E9E9E9]'>
                    <div
                        className='w-full h-[250px] rounded-tl-[8px] rounded-tr-[8px] bg-cover bg-center border object-contain border-[#F0F0F0]'
                        style={{ backgroundImage: `url(${Images.assementStart})` }}
                    />
                    <div className='w-full bg-[#F7F7F7] rounded-[12px] p-[24px] flex flex-col items-center'>
                        <div className='flex justify-between w-full mb-[20px]'>
                            <div className='flex items-center gap-[6px] py-[6px] px-[12px] bg-white rounded-full border border-[#E9E9E9]'>
                                <TimeIcon />
                                <p className='bodySmall'>34Mins</p>
                            </div>
                            <div className='flex items-center py-[6px] px-[12px] bg-white rounded-full border border-[#E9E9E9]'>
                                <p className='bodySmall'>9 Questions</p>
                            </div>
                        </div>

                        <div className='text-center w-[90%]  flex flex-col gap-[8px] justify-center'>
                            <h3>HR Policies & Compliance</h3>
                            <h5> Check how well you know the policies that shape a safe and compliant workplace</h5>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <Button title='Begin Section' size='large' />
                </div>
            </div>
        </div>
    )
}

export default AssessmentFlow