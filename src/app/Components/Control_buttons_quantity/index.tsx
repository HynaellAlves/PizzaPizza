'use client'

import { useState, useEffect } from "react";

import "./Control.buttons.css";

import { pizza } from "../../types/Pizza_propierts";
import { alter_cart } from "@/app/Functions/Functions_request";

export default function Control_buttons(props: pizza) {

    const [count, setCount] = useState<number>(props.quantity);
    const [cartProps] = useState<pizza>(props);
    
    let newCardProps: pizza = { ...cartProps };

    function counterAdd(){

        setCount(prev => prev + 1);
    }

    function counterRev() {

        if (count == 0 || count == null || count == undefined) {
            setCount(0);
        } else {

            setCount(prev => prev - 1);
        }

    }

    useEffect(() => {

        newCardProps.quantity = count;
        alter_cart(newCardProps);

    }, [count]);

    return (
        <div id="container_control_quantity">
            <button onClick={counterRev} className="button_control_buttons" id="button_control_buttons_minus">-</button>
            <div className="container_label_control_buttons">
                <label className="label_control_buttons">{count}</label>
            </div>
            <button onClick={counterAdd} className="button_control_buttons" id="button_control_buttons_plus">+</button>
        </div>
    )
}