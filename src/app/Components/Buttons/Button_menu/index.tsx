'use client'

import React from 'react';

import './Button_menu.css';
import { pizza } from '../../../types/Pizza_propierts';
import { add_cart } from '@/app/Functions/Functions_request';

interface Types {
    pizzaProps: pizza;
    children?: React.ReactNode;
}

export default function Button(props: Types) {
    return (
        <button
            onClick={() => add_cart(props.pizzaProps)}
            id='button'
            className='button'>
            {props.children}
        </button>
    );
}