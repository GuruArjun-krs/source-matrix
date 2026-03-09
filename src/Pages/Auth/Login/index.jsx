import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { AuthContext } from '../../../Context/AuthContext';
import { Images } from '../../../Assets/Images';
import { Button, TextInput } from '../../../Components';
import { loginSchema } from '../../../Utils/validationSchema';

const Login = () => {
    const navigate = useNavigate()
    const { setAuthenticate } = useContext(AuthContext);

    const loginFormik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            navigate('/verifyEmail')
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
                <div className="col-span-3 row-span-6 col-start-4 bg-[#FFFFFF] h-full rounded-[8px] gap-[32px] flex flex-col items-center justify-center">
                    <div className='flex flex-col gap-[24px] w-[326px]'>
                        <div className='flex flex-col gap-[8px] items-center'>
                            <h2>Login</h2>
                            <p className='bodyMedium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <TextInput
                            label={'Email ID or Phone Number'}
                            placeholder='Enter'
                            isMandatory
                            value={loginFormik.values.email}
                            onChangeText={loginFormik.handleChange('email')}
                            error={loginFormik.touched.email && loginFormik.errors.email}
                        />
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <Button title={'Login'} size={'large'} onClick={loginFormik.handleSubmit} />
                        <p className='bodyMedium'>Didn’t Have Register as Reviewer ? <span className='label cursor-pointer font-semibold text-[#00126D]'>Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login