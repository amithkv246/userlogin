import React, { useState } from "react";
import TextInput from "../../components/textInput";
import Button from "../../components/button";

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eee", height: "100svh" }}>
                <div className="bg-light w-25 p-3 text-center rounded-3" style={{ boxShadow: "0px 0px 10px 5px #aaa" }}>
                    <p className="fs-3 fw-semibold text-primary">Login</p>
                    <TextInput type={"email"} placeholder={"example@gmail.com"} onchange={(e) => console.log(e.target.value)} />
                    <TextInput type={"password"} placeholder={"********"} />
                    <Button label={"Login"} />
                    <p style={{ fontSize: "small" }}>Don't have an account? <span className="text-primary">Create an account</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}