'use client'

import "./index.css";
import Image from "next/image";

const redirecionar = () => {
    window.location.href = 'http://localhost:3000/Shop';
}

export default function Shopping_cart() {
    return (
        <div id="container_shopping_cart">
            <button onClick={redirecionar}>
                <Image src="/Cart_icon.png" alt="shopping_cart" width={20} height={20} />
            </button>
        </div>
    )
}
