import React from 'react'
import { Input } from 'antd';

import { COLORS } from '../../Utils/colorPalatte';
import './style.scss'

const TextInput = ({ label, isMandatory = false, value, onChangeText, placeholder = 'Enter', error }) => {

    return (
        <div className='flex flex-col gap-1 w-full'>
            {label && (
                <div className='flex flex-row gap-2'>
                    <p className={`${error ? "errorStyle" : "labelStyle"}`}>{label}</p>
                    {isMandatory && (
                        <p className='mandatoryStyle'>
                            *
                        </p>
                    )}
                </div>
            )}
            <div className='flex flex-col gap-1'>
                <Input
                    value={value}
                    onChange={onChangeText}
                    placeholder={placeholder}
                    status={error ? 'error' : ''}
                    className={`py-[10px] px-[16px]`}
                />

                {error && (
                    <p className='errorStyle'>{error}</p>
                )}
            </div>
        </div>
    )
}

export default TextInput