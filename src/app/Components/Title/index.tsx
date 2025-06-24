'use client';

import React from 'react';

type TitleProps = {
    id?: string;
    fontStyle: string;
    fontSize: string;
    children: React.ReactNode;
}

export default function Title(props: TitleProps) {
    return (
        <div id={props.id} className='container_title' style={{ fontFamily: props.fontStyle, fontSize: props.fontSize }}>
            <h1 style={{ fontSize: props.fontSize }}>
                {props.children}
            </h1>
        </div>
    )
};