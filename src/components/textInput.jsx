import React from "react";

export default function TextInput({ type, placeholder, onchange }) {
    return (
        <React.Fragment>
            <input type={type} placeholder={placeholder} onChange={onchange} className="form-control mb-3" />
        </React.Fragment>
    )
}