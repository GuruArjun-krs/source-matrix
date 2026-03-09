// import React from 'react';
// import { Radio, Space, ConfigProvider } from 'antd';
// import './style.scss'

// const RadioBtn = ({ options = [], onChange, value, direction = 'vertical', className = "" }) => {
//     return (
//         <ConfigProvider
//             theme={{
//                 token: {
//                     colorPrimaryHover: '#78C0DD',
//                 },
//                 components: {
//                     Radio: {
//                         colorPrimary: '#00126D',
//                         radioSize: 24,
//                         dotSize: 18,
//                     },
//                 },
//             }}
//         >
//             <Radio.Group onChange={(e) => onChange(e.target.value)} value={value} className={`${className} axyon__`}>
//                 <Space orientation={direction}>
//                     {options.map((option) => (
//                         <Radio key={option.value} value={option.value} disabled={option.disabled}>
//                             {option.label}
//                         </Radio>
//                     ))}
//                 </Space>
//             </Radio.Group>
//         </ConfigProvider>
//     );
// };

// export default RadioBtn;


import React from 'react';
import './style.scss';

const RadioBtn = ({ options = [], onChange, value, direction = 'vertical', className = "" }) => {
    return (
        <div className={`axyon__radio_group ${direction} ${className}`}>
            {options.map((option) => {
                const isSelected = value === option.value;
                return (
                    <label
                        key={option.value}
                        className={`axyon__radio_container ${option.disabled ? 'disabled' : ''}`}
                    >
                        <input
                            type="radio"
                            name="custom-radio"
                            value={option.value}
                            checked={isSelected}
                            disabled={option.disabled}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="axyon__radio_custom"></span>
                        <label>{option.label}</label>
                    </label>
                );
            })}
        </div>
    );
};

export default RadioBtn;