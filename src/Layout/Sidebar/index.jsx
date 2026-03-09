import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { Sidebaritems } from '../../Utils/sidebarItems'
import { metaTitle } from '../../Utils/functions'
import { Popup, Button } from '../../Components'
import { AuthContext } from '../../Context/AuthContext'
import { useTour } from '../../Layout'


const Sidebar = () => {
    const { startTour } = useTour();
    const { setAuthenticate } = useContext(AuthContext);
    const logoutModelRef = useRef();

    const handleLogout = () => {
        setAuthenticate((prev) => ({ ...prev, auth: false }))
        localStorage.clear()
        navigate('/login')
    }

    const NavigationFunc = (items) => {
        return (
            items?.map((el, index) => {
                const isLogout = el?.title === 'Logout';
                if (isLogout) {
                    return (
                        <div
                            onMouseDown={(e) => e?.preventDefault()}
                            key={el?.id || index}
                            className="flex items-center gap-[8px] py-[12px] px-[14px] rounded-[48px] cursor-pointer hover:bg-red-50 transition-colors"
                            onClick={() => logoutModelRef?.current?.open()}
                        >
                            {el?.icon}
                            <p className="bodyMedium text-[#212121]">{el?.title}</p>
                        </div>
                    );
                }

                return (
                    <NavLink
                        onMouseDown={(e) => e?.preventDefault()}
                        to={el?.route}
                        key={el?.id || index}
                        className={({ isActive }) => `${el?.title === 'Modules' && "axyon__tour_sidebar"} flex items-center gap-[8px] py-[12px] px-[14px] rounded-[48px] transition-colors ${isActive ? "bg-[#C1E2EF]" : "bg-transparent hover:bg-gray-100"}`}
                        onClick={() => metaTitle?.(el?.title)}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive ? el?.activeIcon : el?.icon}
                                <p className={`bodyMedium ${isActive ? "text-[#00126D]" : "text-[#212121]"}`}>
                                    {el?.title}
                                </p>
                            </>
                        )}
                    </NavLink>
                );
            })
        );
    };

    return (
        <>
            <aside className='bg-[#FFFFFF] w-[260px] h-[100vh-68px] overflow-y-scroll axyon__scrollBar py-[24px] px-[16px]'>
                <div className='flex flex-col gap-[24px]'>
                    {NavigationFunc(Sidebaritems)}
                </div>

                <div
                    className="mt-auto pt-4 border-t border-[#F5F5F5] cursor-pointer flex items-center gap-2 opacity-70 hover:opacity-100"
                    onClick={startTour}
                >
                    <span className="text-[18px]">💡</span>
                    <p className="bodySmall text-[#666]">Show Tour</p>
                </div>
            </aside>

            <Popup ref={logoutModelRef} isClose={false}>
                <div className='flex flex-col gap-4 text-center p-2 font-["Outfit"]'>
                    <h4>Confirm Logout?</h4>
                    <div className='flex gap-[16px] mt-2 justify-center items-center w-full'>
                        <Button title='Cancel' type={'secondary'} size={'small'} onClick={() => logoutModelRef.current.close()} />
                        <Button isPrimary title='Yes, Logout' onClick={handleLogout} />
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Sidebar