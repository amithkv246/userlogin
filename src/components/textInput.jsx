import React from "react";

export default function TextInput({ type, placeholder, onChange }) {
    return (
        <React.Fragment>
            <input type={type} placeholder={placeholder} onChange={onChange} className="form-control mb-3" />
        </React.Fragment>
    )
}