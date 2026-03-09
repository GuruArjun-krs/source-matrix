import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required('Email is required')
})

export const verifyEmailSchema = Yup.object({
    otp: Yup.string().required('OTP is required')
});
