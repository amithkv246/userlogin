import React, { useState } from "react";
import TextInput from "../../components/textInput";
import Button from "../../components/button";

export default function RegistrationPage() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    function registerhandling() {
        alert("Name:"+name+" Email:"+email+" Password:"+password)
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eee", height: "100svh" }}>
                <div className="bg-light w-25 p-3 text-center rounded-3" style={{ boxShadow: "0px 0px 10px 5px #aaa" }}>
                    <p className="fs-3 fw-semibold text-primary">Registration</p>
                    <TextInput type={"text"} placeholder={"*name*"} onChange={(e) => setName(e.target.value)}/>
                    <TextInput type={"email"} placeholder={"*email*"} onChange={(e) => setEmail(e.target.value)}/>
                    <TextInput type={"password"} placeholder={"*password*"} onChange={(e) => setPassword(e.target.value)}/>
                    <Button label={"Register"} onClick={registerhandling}/>
                </div>
            </div>
        </React.Fragment >
    )
}

