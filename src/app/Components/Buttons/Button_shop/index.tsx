'use client'

import './Button_shop.css'

type Button = {
    id?: string
    children: React.ReactNode
    onClick: () => void
}

export default function Button_shop(props: Button) {

    return (
        <button onClick={props.onClick} id={props.id} className='button_shop'>
            {props.children}
        </button>
    )
}