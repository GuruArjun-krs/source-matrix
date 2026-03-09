import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLogo, NotificationActive } from "../../Assets/Svg"

const Header = ({ isLogo, primary }) => {
    const navigate = useNavigate()
    return (
        <div className={`${primary ? "bg-[#FFFFFF] border-b border-[#E9E9E9]" : "bg-[#F7F7F7]"} py-[16px] px-[24px] flex ${isLogo ? "justify-between" : "justify-end"} items-center`}>
            {isLogo && <div className='cursor-pointer' onClick={() => navigate('/dashboard')}> <HeaderLogo width={120} height={36} /></div>}

            {primary && (
                <div className='h-[36px] flex items-center gap-[16px]'>
                    <div className='cursor-pointer'>
                        <NotificationActive />
                    </div>

                    <div className='flex items-center gap-[6px]'>
                        <div className='p-[8px] bg-[#78C0DD] text-center h-[36px] rounded-full'>
                            GA
                        </div>
                        <label>Guru Arjun</label>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header