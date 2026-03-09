import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'

import { AuthContext } from '../Context/AuthContext'

const Layout = () => {
    const { isAuthenticate } = useContext(AuthContext);
    const [toggle, setToggle] = useState([]);
    const [sidebarSlide, setSlide] = useState(false)

    return (
        <div className='h-screen'>
            <Header isLogo primary={isAuthenticate} />
            <div className='h-[calc(100%-69px)] flex'>
                <Sidebar toggle={toggle} setToggle={setToggle} sidebarSlide={sidebarSlide} setSlide={setSlide} />
                <main className='w-[calc(100%-260px)] bg-[#F5F5F5] py-[24px] px-[32px]'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout