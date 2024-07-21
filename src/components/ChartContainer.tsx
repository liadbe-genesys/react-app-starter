import React from "react";


export default function ChartContainer({ children, title }) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
