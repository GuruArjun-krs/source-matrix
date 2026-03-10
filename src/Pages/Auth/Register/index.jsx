import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { AuthContext } from '../../../Context/AuthContext';
import { Images } from '../../../Assets/Images';
import { Button, TextInput } from '../../../Components';
import { registerSchema } from '../../../Utils/validationSchema';

const Register = () => {
    const navigate = useNavigate()
    const { setAuthenticate } = useContext(AuthContext);

    const registerFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            companyName: '',
            role: ''
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            // navigate('/verifyEmail')
        }
    })

    const formFields = [
        { id: 'firstName', label: 'First Name' },
        { id: 'lastName', label: 'Last Name' },
        { id: 'email', label: 'Email ID' },
        { id: 'number', label: 'Phone Number' },
        { id: 'companyName', label: 'Company Name' },
        { id: 'role', label: 'Your Role' },
    ];

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
                <div className="col-span-3 row-span-6 col-start-4 bg-[#FFFFFF] rounded-[8px] gap-[32px] py-[32px] flex flex-col items-center justify-center">
                    <div className='flex flex-col gap-[12px] w-[326px]'>
                        <div className='flex flex-col gap-[8px] items-center'>
                            <h2>Sign up</h2>
                            <p className='bodyMedium text-center'>Create an account to access the platform</p>
                        </div>
                        {formFields.map((field) => (
                            <TextInput
                                key={field.id}
                                label={field.label}
                                placeholder='Enter'
                                isMandatory
                                value={registerFormik.values[field.id]}
                                onChangeText={registerFormik.handleChange(field.id)}
                                onBlur={registerFormik.handleBlur(field.id)}
                                error={registerFormik.touched[field.id] && registerFormik.errors[field.id]}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <Button title={'Login'} size={'large'} onClick={registerFormik.handleSubmit} />
                        <p className='bodyMedium text-center'>Already Registered as a Reviewer? <span className='btnLarge cursor-pointer font-semibold text-[#00126D]' onClick={() => navigate('/login')}>Log in</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register