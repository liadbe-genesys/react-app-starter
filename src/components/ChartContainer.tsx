import React from "react";


export default function ChartContainer({ children, title }) {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}
