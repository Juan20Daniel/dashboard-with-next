
import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { IoCafeOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
    return (
        <div className="flex flex-wrap gap-5 p-2">
            <SimpleWidget 
                title='Contador'
                subTitle='Contador'
                label='1+1=pez'
                icon={<IoCafeOutline size={40} />}
            />
            <SimpleWidget 
                title='Contador'
            />
        </div>
    );
}
