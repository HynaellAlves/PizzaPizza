import React from 'react';
import './index.css';

type TextProps = {
    id?: string;
    position?: 'center' | 'left' | 'right' | 'justify';
    fontWeight?: '400' | '600' | '700';
    fontStyle: string;
    fontSize: string;
    children: React.ReactNode;
};

export default function Text(props: TextProps) {
    return (
        <div className="container_text" style={{ fontFamily: props.fontStyle}}>
            <p style={{ fontSize: props.fontSize, textAlign: props.position, fontWeight: props.fontWeight }}>
                {props.children}
            </p>
        </div>
    )
}