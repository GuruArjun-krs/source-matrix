import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { AuthContext } from '../../../Context/AuthContext';
import { Images } from '../../../Assets/Images';
import { Button, OtpInput } from '../../../Components';
import { verifyEmailSchema } from '../../../Utils/validationSchema';
import { formatTimer } from '../../../Utils/functions';

const VerifyEmail = () => {
    const navigate = useNavigate()
    const { setAuthenticate } = useContext(AuthContext);

    const [infoState, setInfoState] = useState({
        timer: 120,
        resend: false
    })

    useEffect(() => {
        let interval;
        if (infoState.timer > 0) {
            interval = setInterval(() => {
                setInfoState((prev) => ({
                    ...prev,
                    timer: prev.timer - 1
                }));
            }, 1000);
        } else {
            setInfoState((prev) => ({ ...prev, resend: true }));
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [infoState.timer]);

    const handleResend = () => {
        if (infoState.resend) {
            setInfoState({
                timer: 120,
                resend: false
            });
            console.log("OTP Resent!");
        }
    };

    const verifyEmailFormik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: verifyEmailSchema,
        onSubmit: (values) => {
            navigate('/onboarding')
        }
    })

    return (
        <div className='min-h-screen h-full bg-[#E6E7F0] py-[90px] px-[80px]' >
            <div className="grid grid-cols-6 grid-rows-6 gap-0 h-full">
                <div className="col-span-3 row-span-6 flex flex-col justify-center items-center py-[20px] gap-[10%]">
                    <div className='gap-[16px] flex flex-col items-center'>
                        <div className='w-[280px] h-[70px]'>
                            <img src={Images.appLogo} className='w-full h-full object-contain' />
                        </div>
                        <p className='bodyLarge text-center w-[75%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    </div>
                    <div className='w-[40%] h-[80%]'>
                        <img src={Images.loginBg} className='w-full h-full object-contain' />
                    </div>
                </div>
                <div className="col-span-3 row-span-6 col-start-4 bg-[#FFFFFF] h-full rounded-[8px] gap-[24px] flex flex-col items-center justify-center">
                    <div className='flex flex-col gap-[24px] w-[326px]'>
                        <div className='flex flex-col gap-[8px] items-center'>
                            <h2>Verify Email</h2>
                            <p className='bodyMedium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <OtpInput
                            value={verifyEmailFormik.values.otp}
                            onChange={verifyEmailFormik.handleChange('otp')}
                            error={verifyEmailFormik.touched.otp && verifyEmailFormik.errors.otp}
                        />
                    </div>
                    <div className='flex flex-col gap-[24px] items-center'>
                        {infoState?.resend ? (
                            <p className='bodyMedium'>Didn’t Receive Code ? <span onClick={handleResend} className={`font-semibold ${infoState.resend ? 'text-[#00126D] cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}>Resend Code</span></p>
                        ) : (
                            <h5>{formatTimer(infoState?.timer)}</h5>
                        )}
                        <Button title={'Verify'} size={'large'} onClick={verifyEmailFormik.handleSubmit} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VerifyEmail