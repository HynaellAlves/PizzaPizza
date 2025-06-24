import "./list.css";

import React from "react";
import Title from "../Title";

type ListProps = {
    children?: React.ReactNode;
}

export default function List({ children }: ListProps) {
    return (
        <div id="container_list">
            {children}
        </div>
    );
}