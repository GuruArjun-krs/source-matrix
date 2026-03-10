import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required('Email is required')
})

export const registerSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required'),
    number: Yup.string().required('Phone number is required'),
    companyName: Yup.string().required('Company name is required'),
    role: Yup.string().required('Role is required'),

})

export const verifyEmailSchema = Yup.object({
    otp: Yup.string().required('OTP is required')
});
