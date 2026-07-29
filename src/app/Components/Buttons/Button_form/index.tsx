'use client'

import React from 'react';

import './Button_form.css';

interface Types {
    id?: string;
    children?: React.ReactNode;
}

export default function Button(props: Types) {
    return (
        <button type='submit' id={props.id} className='button'>
            {props.children}
        </button>
    );
}