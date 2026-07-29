'use client'

import React, { useState } from 'react';

import './Card_menu.css';

import Image from 'next/image';
import Button from '../../Buttons/Button_menu';

import { pizza } from '@/app/types/Pizza_propierts';

export default function Card_menu(props: pizza) {

    return (
        <div id='card_menu'>
            <div className="card_menu_image_container">
                <Image id='card_menu_image' src={props.path_image} alt="Card Menu" width={226} height={226} />
            </div>
            <div className="card_menu_content">
                <div className="card_menu_content_title">
                    <h3>{props.name}</h3>
                </div>
                <div className="card_menu_content_description">
                    <p>{props.description}</p>
                </div>
                <div className="card_menu_content_price">
                    <p>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(props.price)}</p>
                </div>
            </div>
            <Button pizzaProps={props}>
                Pedir agora
            </Button>
        </div>
    )
}