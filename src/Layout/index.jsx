import React, { useContext, useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import Header from './Header'
import Sidebar from './Sidebar'

import { AuthContext } from '../Context/AuthContext'
export const TourContext = createContext();
export const useTour = () => useContext(TourContext);

const Layout = () => {
    const { isAuthenticate } = useContext(AuthContext);
    const [toggle, setToggle] = useState([]);
    const [sidebarSlide, setSlide] = useState(false)

    useEffect(() => {
        const hasSeenTour = localStorage.getItem('hasSeenTour');
        if (!hasSeenTour) {
            setTimeout(() => {
                startTour();
                localStorage.setItem('hasSeenTour', 'true');
            }, 1500);
        }
    }, []);

    const tour = driver({
        showProgress: false,
        nextBtnText: 'Next',
        prevBtnText: 'Back',
        doneBtnText: 'Get Started',
        onPopoverRender: (popover, { config, state }) => {
            const activeIndex = state.activeIndex;
            const totalSteps = config.steps.length;
            const footer = popover.wrapper.querySelector(".driver-popover-footer");
            const oldStepper = footer.querySelector(".custom-stepper");
            if (oldStepper) oldStepper.remove();
            const stepper = document.createElement("div");
            stepper.className = "custom-stepper flex items-center gap-[3px] mr-auto";
            for (let i = 0; i < totalSteps; i++) {
                const dot = document.createElement("div");
                if (i === activeIndex) {
                    dot.className = "h-[5px] w-[40px] bg-[#78C0DD] rounded-[30px] transition-all duration-300";
                } else {
                    dot.className = "h-[5px] w-[5px] bg-[#E9E9E9] rounded-full";
                }
                stepper.appendChild(dot);
            }
            footer.prepend(stepper);
        },
        animate: true,
        overlayColor: 'rgba(0, 0, 0, 0.7)',
        steps: [
            { element: '.axyon__tour_sidebar', popover: { title: 'Quick Intro', description: 'This tour gives you a brief overview of the assessment structure and what information you’ll be asked for.', side: "right" } },
            { element: '.axyon__assessment_card_wrapper', popover: { title: 'Assessment Details', description: 'See a snapshot of what the assessment covers and how the process works before you start.', side: "right" } },
            { element: '.axyon_assessment_card_body', popover: { title: 'Info Needed', description: 'You’ll answer brief questions to help us understand your overall inputs and choices throughout the process.', side: "top" } },
            { element: '.axyon_assessment_card_footer', popover: { title: 'Start Assessment', description: "Click here when you're ready to begin the assessment. It takes around 20-60 minutes to complete.", side: "top" } }
        ]
    });

    const startTour = () => tour.drive();

    return (
        <TourContext.Provider value={{ startTour }}>
            <div className='h-screen'>
                <Header isLogo primary={isAuthenticate} />
                <div className='h-[calc(100%-69px)] flex'>
                    <Sidebar toggle={toggle} setToggle={setToggle} sidebarSlide={sidebarSlide} setSlide={setSlide} />
                    <main className='w-[calc(100%-260px)] bg-[#F5F5F5] py-[24px] px-[32px]'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </TourContext.Provider>
    )
}

export default Layout