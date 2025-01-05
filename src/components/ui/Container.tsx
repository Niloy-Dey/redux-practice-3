import React, { ReactNode } from 'react';

type TContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
    return (
        <div className='h-screen w-full   mx-auto px-4'>
            {children}
        </div>
    );
};

export default Container;
