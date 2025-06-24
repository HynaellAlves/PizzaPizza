import React from "react";
import "./index.css";

type Props = {
    children: React.ReactNode;
}

export default function Modal({ children }: Props) {
    return (
        <div id="container_modal">
            {children}
        </div>
    )
}