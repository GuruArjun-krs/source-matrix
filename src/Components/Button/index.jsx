import React from 'react'

const Button = ({ title, size, disable, loading, className, onClick, type = 'primary' }) => {

    const BtnStyle = `py-[14px] bg-[${type === 'primary' ? '#78C0DD' : '#FFFFFF'}] ${disable && 'bg-[#F7F7F7] !text-[#E9E9E9]'} text-[#00126D] font-["Urbanist"] font-semibold text-base ${type === 'secondary' && 'border-2 border-[#00126D]'}`
    const BtnSize = `${size === 'large' ? '!w-[320px]' : '!w-[112px]'}`

    return (
        <button onClick={onClick} onMouseDown={(e) => e.preventDefault()} disabled={disable || loading} className={`rounded-[68px] flex justify-center items-center w-full cursor-pointer shadow-lg ${BtnStyle} ${BtnSize} ${className}`}>
            {loading && (
                <div className="w-4 h-4 border-2 border-t-transparent border-[#00126D] rounded-full animate-spin"></div>
            )}
            {!loading && title}
        </button>
    )
}

export default Button