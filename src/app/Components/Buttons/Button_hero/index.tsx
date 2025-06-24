'use client'

import React from 'react';

import './Button_hero.css';

interface Types {
    children?: React.ReactNode;
}

export default function Button(props: Types) {
    return (
        <button
            id='button'
            className='button'>
            {props.children}
        </button>
    );
}