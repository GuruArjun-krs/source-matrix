import React, { useImperativeHandle, useRef } from 'react';
import { Modal } from 'antd';

const PopupModel = React.forwardRef(({ children, isClose = true, ...restProps }, ref) => {
    const [modal, contextHolder] = Modal.useModal();
    const instanceRef = useRef(null);

    useImperativeHandle(ref, () => ({
        open: (config = {}) => {
            instanceRef.current = modal.confirm({
                closable: isClose ? true : false,
                centered: true,
                icon: null,
                content: (
                    <div className='py-[20px]'>
                        {children}
                    </div>
                ),
                maskClosable: true,
                footer: null,
                ...restProps,
                ...config,
            });
        },
        close: () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
            }
        }
    }));

    return (
        <>
            {contextHolder}
        </>
    );
});

export default PopupModel;