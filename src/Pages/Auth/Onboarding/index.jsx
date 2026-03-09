import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../Context/AuthContext'
import Header from '../../../Layout/Header'
import { Images } from '../../../Assets/Images'
import { Button } from '../../../Components'

const Onboarding = () => {
    const navigate = useNavigate()
    const { setAuthenticate } = useContext(AuthContext);
    const [infoState, setInfoState] = useState({
        currentStep: 0
    })

    const InputerIntro = [
        { id: 1, header: 'Let’s Get Started', img: Images.inputerIntroOne, body: 'This quick setup will walk you through the essential steps and ensure everything is ready before you begin the assessment. You’ll follow a simple guided flow that helps you understand what’s next and prepares you for the process ahead' },
        { id: 2, header: 'AI-Powered Assessment', img: Images.inputerIntroTwo, body: 'The system uses your responses to create a more personalised experience. You’ll move through short, adaptive questions that help generate meaningful insights and guide you smoothly to the next stage.' }
    ]

    const handleNext = async () => {
        if (infoState?.currentStep < InputerIntro.length - 1) {
            setInfoState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }))
        } else {
            await setAuthenticate((prev) => ({ ...prev, auth: true }))
            localStorage.setItem('token', 'asdasdasdaq12')
            navigate('/dashboard')
        }
    };
    const activeContent = InputerIntro[infoState?.currentStep];

    return (
        <div className='min-h-screen h-full bg-[#FFFFFF] flex flex-col gap-[16px]'>
            <Header isLogo primary={false} />
            <section className='h-[calc(100%-68px)] flex flex-col gap-[40px] items-center justify-center'>
                <div className='flex flex-col items-center w-full max-w-[860px] gap-6 animate-fadeIn'>
                    <h2>{activeContent?.header}</h2>
                    <div className='h-[340px] w-full flex justify-center'>
                        <img src={activeContent?.img} alt="Illustration" className='h-full w-full' />
                    </div>
                    <h5>{activeContent?.body}</h5>
                </div>
                <div className='flex flex-col gap-[20px] justify-center items-center'>
                    <div className='flex gap-[8px]'>
                        {InputerIntro.map((_, index) => (
                            <div
                                key={index}
                                className={`h-[10px] w-[200px] rounded-[20px] transition-all duration-300 ${index <= infoState?.currentStep ? 'bg-[#78C0DD]' : 'bg-[#E9E9E9]'}`}
                            />
                        ))}
                    </div>
                    <Button title={infoState?.currentStep === InputerIntro.length - 1 ? 'Get Started' : 'Next'} size='large' onClick={handleNext} />
                </div>
            </section>
        </div>
    )
}

export default Onboarding