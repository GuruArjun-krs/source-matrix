import React from 'react';
import { Flex, Input, Typography } from 'antd';
import './style.scss'

const { Text } = Typography;

const OtpInput = ({ length = 4, value, onChange, error }) => {

    return (
        <Flex vertical gap="middle" align="center" className="w-full">
            <Input.OTP
                size="large"
                length={length}
                value={value}
                onChange={onChange}
                status={error ? 'error' : ''}
                style={{ height: '56px', fontSize: '36px' }}
                type='number'
                className='axyon__ text-[36px]'
            />

            {error && (
                <p className='errorStyle'>{error}</p>
            )}
        </Flex>
    );
};

export default OtpInput;