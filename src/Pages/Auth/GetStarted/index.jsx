import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Images } from '../../../Assets/Images'
import RadioBtn from '../../../Components/RadioButton'
import { Button } from '../../../Components'

const GetStarted = () => {
    const navigate = useNavigate()
    const [selectedType, setSelectedType] = useState(null);

    const types = [
        { key: 'new', img: Images.getStartedOne, title: 'New User', subTitle: 'Create a new account and get started in minutes' },
        { key: 'existing', img: Images.getStartedTwo, title: 'Existing User', subTitle: 'Access your account and manage your activity' }
    ]

    const handleSelect = () => {
        if (selectedType === 'new') {
            navigate('/register')
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='bg-[#E6E7F0] min-h-screen h-full flex flex-col justify-center items-center gap-[24px] py-[32px]'>
            <div className='w-[280px] h-[70px]'>
                <img src={Images.appLogo} className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col items-center gap-[20px]'>
                <div className='flex flex-col items-center justify-center gap-[8px]'>
                    <h2>Get Started</h2>
                    <h4>Choose how you want to continue</h4>
                </div>

                <div className="flex justify-center gap-[24px]">
                    {types?.map((el) => (
                        <div className={`bg-[#FFFFFF] p-[32px] gap-[24px] flex flex-col rounded-[8px] cursor-pointer ${selectedType === el?.key ? "shadow-lg" : ''}`} onClick={() => setSelectedType(el.key)}>
                            <div className='flex justify-end'>
                                <RadioBtn options={[{ label: '', value: el.key }]}
                                    value={selectedType}
                                    onChange={setSelectedType} />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-[32px]'>
                                <img src={el?.img} width={el?.key === 'new' ? 240 : 354} height={164} />
                                <div className='flex flex-col justify-center items-center w-[354px]'>
                                    <h4>{el?.title}</h4>
                                    <p className='bodyLarge text-center'>{el?.subTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button title={'Continue'} size={'large'} disable={selectedType === null} onClick={() => handleSelect()} />
            </div>
        </div>
    )
}

export default GetStarted