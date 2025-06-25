'use client'

import React from 'react';

import './Button_menu.css';
import { pizza } from '../../../types/Pizza_propierts';
import { add_cart } from '@/app/Functions/Functions_request';
import { toast, Zoom } from 'react-toastify';

interface Types {
    pizzaProps: pizza;
    children?: React.ReactNode;
}

export default function Button(props: Types) {

    const notify = (validation: boolean | undefined) => {

        if (validation == true) {
            toast.success("Adicionado ao carrinho!", {
                className: "Toast_default",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                transition: Zoom,
            })
        } else if (validation == false || validation == undefined) {
            toast.error("O item já foi adicionado ao carrinho!", {
                className: "Toast_default",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                transition: Zoom,
            })
        }
    };

    const add = async () => {
        const teste = await add_cart(props.pizzaProps);
        notify(teste);
    }

    return (
        <button
            onClick={() => add()}
            id='button'
            className='button'>
            {props.children}
        </button>
    );
}